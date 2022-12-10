import React, { Component } from 'react';

class ContactMe extends Component {

  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://www.jotform.com/assign/223433519756461/223434024271041";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const divStyle = {
          margin: "0 auto",
          maxWidth: "100%",
          width: "640px"
        };

    const iframeStyle = {
          margin: "0 auto",
          maxWidth: "100%",
          width: "100%",
          height: "550px",
          border: "1px solid #cfcfcf"
        };

    const riddleID = "120064";
    const riddleUrl = "https://form.jotform.com/223433519756461" ;

    return (
      <div className='py-16'>
        <div className="riddle_target" data-rid-id={riddleID} data-fg="#252525" data-bg="#EDEDED" style={divStyle} data-auto-scroll="true">
          <iframe title="embed-test" style={iframeStyle} src={riddleUrl}></iframe>
        </div>
      </div>
    );
  }
}

export default ContactMe;