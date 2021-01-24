import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class AboutContent extends Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
        <Terminal
          color="green"
          backgroundColor="black"
          barColor="black"
          style={{ fontWeight: 'bold', fontSize: '1em' }}
          commands={{
            'open-google': () => window.open("https://www.google.com/", "_blank"),
            showmsg: this.showMsg,
            popup: () => alert("Terminal in React")
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
        />
      </div>
    );
  }
}

export default AboutContent;