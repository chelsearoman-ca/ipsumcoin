var React = require('react');
var ReactDOM = require('react-dom');
export default class Copy extends React.Component {
    
      constructor(props) {
        super(props);
        return {value: '', copied: false};
        this.state = { copySuccess: '' }
      }
  
  
    onChange({target: {value}}) {
      this.setState({value, copied: false});
    }
  
  
    onCopy() {
      this.setState({copied: true});
    }
  
  
    render() {
      return (
        <div>
                  
            <input value={this.state.value} size={10} onChange={this.onChange} />
                  
          <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
            <button>Copy</button>
          </CopyToClipboard>
  
                  <div>
          {this.state.copied ? <span >Copied.</span> : null}
                  </div>
          <br />
  
          <input type="text" />
  
        </div>
      );
    }
  });
  
  ReactDOM.render(<App/>, document.getElementById('container'));

