import React,{useEffect,useRef} from 'react';


const buildIframeSrc=(js) => `
  <html>
  <head>

  </head>
  <body>


  <script>
    function getLog() {
      let output = "", arg, i;
      for (i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        output += typeof arg === "object" ? JSON.stringify(arg) : arg;
      }
      window.parent.postMessage(output, '*');
      console.log(...arguments);
    }

    // -----------------------------------------

    try {
      ${js}
    } catch (err) {
      window.parent.postMessage(err.message, '*');
      console.error(err.message);
    }
  </script>
  </body>
  </html>
`;


export default function Browser({js,addHistory}) {
  const iframeContainer=useRef(null);


  useEffect(() => {
    window.addEventListener('message',(e) => {
      if(!e.data) return false; // only handle if theres data
      if(typeof e.data!=='string') return false; // data must be a string
      if(e.data.includes('_')) return false; // dont watch for events emitted by the react library
      addHistory(e.data);
    });
  },[addHistory]);

  /**
   * Run the code
   */
  useEffect(() => {
    while(iframeContainer.current.hasChildNodes()) {
      iframeContainer.current.removeChild(iframeContainer.current.lastChild);
    }
    let iframe=document.createElement('iframe');
    iframe.height='100%';
    iframe.width='100%';
    iframe.sandbox='allow-scripts allow-same-origin';
    iframe.style.border='none';
    iframe.background='#fff';

    const code=js
      .replace(new RegExp('console.log','g'),'getLog')
      .replace(new RegExp('F.','g'),'parent.F.')
      .replace(new RegExp('R.','g'),'parent.R.');
    iframe.srcdoc=buildIframeSrc(code);
    iframeContainer.current.appendChild(iframe);
  },[js]);

  const display='none';

  return (
    <div
      ref={iframeContainer}
      className='iframe-container'
      style={{
        height: '100%',
        width: '100%',
        background: 'white',
        display,
      }}
    />
  );
}
