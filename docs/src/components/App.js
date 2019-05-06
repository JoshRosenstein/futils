import React, { Component } from 'react';
import Editor from './Editor';
import Browser from './Browser';
import Console from './Console';
import Navbar from './Navbar';
import './App.css';
import * as R from 'ramda'
import * as F from '@roseys/futils'

// Expose libraries for the REPL onto window
F.keys(F).forEach(method => {
  global[method] = F[method]
})


global.F = F
global.R = R


/**
 * Separating to its own component cuz divitis
 */
const PlaygroundHeader = ({ title, runCode }) => (
  <div className='playground-header'>
    <div className='columns'>
      <div className='column is-one-quarter'>
        <h2 className='title is-6'>{title}</h2>
      </div>
      <div className='column has-text-right is-one-quarter'>
        <button onClick={runCode}>Run</button>
      </div>
    </div>
  </div>
);

/**
 * The main playground component
 * Get a gist and only pull the first file of each .html, .css, .js
 */
export default class Playground extends Component {
  state = {
    history: [],
    title: '',
    js: '',
    isProcessing: false, // tiny way to stop a user from hitting run 10000 times in a row
  };

  // helpers cuz lazy
  setTitle = (title) => this.setState({ title });
  setHistory = (history) => this.setState({ history });
  setJs = (js) => this.setState({ js });

  /**
   * Grab the gist on first mount
   * mocking a gist id for now
   * https://gist.github.com/sevilayha/efe7fe257c9bfdc4d81aa654ddbb5bec
   */
  componentDidMount() {
    const gistId = this.props.gistId || '64956aea8f0f09bb97e7ee7dd2fe5c85';
    this.getGist(gistId);
  }

  /**
   * Get the gist from GitHub API
   * Parse for the .html, .css, .js files
   * This is simple. Will only pull the first file in the gist of each extension
   */
  getGist = (id) => {
    fetch(`https://api.github.com/gists/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // find the first .html, .css, .js files and apply them as the content
        const fileNames = Object.keys(data.files);
        const gistJs = fileNames.find((file) => file.includes('.js'));

        this.setTitle(data.files[gistJs].filename);
        if (gistJs) this.setJs(data.files[gistJs].content);
      });
  };

  addHistory = (text) => {
    const newHistory = [...this.state.history, { text }];
    this.setHistory(newHistory);
  };

  clearHistory = () => this.setHistory([]);

  runCode = () => {
    if (this.state.isProcessing) return false;
    this.setState({ isProcessing: true });

    const { js } = this.state;

    this.setJs('');

    setTimeout(() => {
      this.setJs(js);
      this.setState({ isProcessing: false });
    }, 250);
  };

  render() {
    const { history, title, js } = this.state;
    const { playgroundId } = this.props;

    return (
      <div>
        <Navbar title='FUTILS' />
        <div className='playground'>
          <PlaygroundHeader title={title} runCode={this.runCode} />
          <div className='columns'>

          <Editor language='javascript' code={js} updateCode={this.setJs} />
          <Console history={history} clearHistory={this.clearHistory} />
          </div>

          <Browser
            playgroundId={playgroundId}
            js={js}
            addHistory={this.addHistory}
          />


        </div>{' '}
      </div>
    );
  }
}
