import React,{Component} from 'react';
import Editor from './Editor';
import Browser from './Browser';
import Console from './Console';
import Navbar from './Navbar';
import './App.css';
import * as R from 'ramda'
import * as F from '@roseys/futils'

// Expose libraries for the REPL onto window
F.keys(F).forEach(method => {
  global[method]=F[method]
})


global.F=F
global.R=R



const PlaygroundHeader=({title,runCode}) => (
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
 * playground component
 */
export default class Playground extends Component {
  state={
    history: [],
    title: '',
    js: '',
    isProcessing: false,
  };

  setTitle=(title) => this.setState({title});
  setHistory=(history) => this.setState({history});
  setJs=(js) => this.setState({js});


  componentDidMount() {
    const gistId=this.props.gistId||'64956aea8f0f09bb97e7ee7dd2fe5c85';
    this.getGist(gistId);
  }

  getGist=(id) => {
    fetch(`https://api.github.com/gists/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const fileNames=Object.keys(data.files);
        const gistJs=fileNames.find((file) => file.includes('.js'));

        this.setTitle(data.files[gistJs].filename);
        if(gistJs) this.setJs(data.files[gistJs].content);
      });
  };

  addHistory=(text) => {
    const newHistory=[...this.state.history,{text}];
    this.setHistory(newHistory);
  };

  clearHistory=() => this.setHistory([]);

  runCode=() => {
    if(this.state.isProcessing) return false;
    this.setState({isProcessing: true});

    const {js}=this.state;

    this.setJs('');

    setTimeout(() => {
      this.setJs(js);
      this.setState({isProcessing: false});
    },250);
  };

  render() {
    const {history,title,js}=this.state;
    const {playgroundId}=this.props;

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
        </div>
      </div>
    );
  }
}
