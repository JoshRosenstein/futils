import React from 'react'
import styled, { injectGlobal } from 'react-emotion'
import InputContainer from './InputContainer'
import Navbar from '../components/Navbar'
import OutputContainer from './OutputContainer'
import CM from 'codemirror/lib/codemirror.css'
import { Sidebar } from '../components/sidebar/components'

import { Button } from '../components/Buttons'

import { State  } from 'react-powerplug'

injectGlobal`
.CodeMirror{
  height: 100%;
}
${CM}
`

const Container = styled('div')({
  // label: 'EditorsContainer',
  // height: '100%',
  // display: 'flex',
  // flex: '1',
  // flexDirection: 'column',
  // overflow: 'hidden',
})

const EditorsContainer = styled('div')({
  label: 'EditorsContainer',
  // display: 'flex',
  // flex: '1',
  // minHeight: '0',
})

const Editors = styled('div')({
  label: 'Editors',
  // display: 'flex',
  // flexFlow: 'row wrap',
  // flex: '1',
})

// const Editor = styled('div')({
//   label: 'Editor',
//   boxSizing: 'border-box',
//   display: 'flex',
//   flex: '1 1 100%',
//   position: 'relative',
//   borderBottom: '1px solid #ddd',
//
//   '@media (min-width: 800px)': {
//     flexBasis: '50%',
//     borderLeft: '1px solid #ddd',
//     marginLeft: '-1px',
//   },
//   '@media (min-width: 1200px)': {
//     flexBasis: '25%',
//   },
// })

//() => setState(s => ({ on: !s.on }))

const GISTID='64956aea8f0f09bb97e7ee7dd2fe5c85'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exampleFiles: [],
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`https://api.github.com/gists/${GISTID}`)
        .then(res => res.json())
        .then(({ files }) => {
          if (!files) {
            return []
          }


              return   Object.keys(files).filter(name=>name.endsWith('.js'))
          }).then(value=>this.setState({ exampleFiles: value }))


  }

  render() {
      const { exampleFiles } = this.state;

console.log(exampleFiles)

  return (
    <State initial={{ optionsShowing: false, examplesShowing: false , exampleFiles:exampleFiles }}>
  {({ state, setState }) => (

        <Container className="playground-container">
          <Navbar title="FUTILS" />
          <EditorsContainer className="editors-container">
            <Sidebar visible={state.optionsShowing || state.examplesShowing}>
              {state.examplesShowing &&
                <div className="sub-options">
                  TODO Examples List
                {exampleFiles.map((file,id)=>
                   <Button key={`${file}${id}`}onClick={()=> window.open(`/#/?gist=${GISTID}/${file}`, "_blank")} >{file}</Button>)}
                </div>}
              {state.optionsShowing &&
                <div className="sub-options">
                TODO Options List
                  <Button>Reset to defaults</Button>
                </div>}
            </Sidebar>
            <Editors className="editors">
              <InputContainer className="editor input" />
              <OutputContainer className="editor output" />
            </Editors>
          </EditorsContainer>
          <div className="bottom-bar">
            <div className="bottom-bar-buttons">
              <Button onClick={() =>setState({ examplesShowing: !state.examplesShowing })}>Examples</Button>
              <Button onClick={() =>setState({ optionsShowing: !state.optionsShowing})}>options</Button>
              <Button>Clear</Button>
            </div>
          </div>
        </Container>

)}
</State>

  )
}}

export default App
