
const Copy = React.createClass({
    getInitialState() {
      return {value: '', copied: false};
    },
  
  
    onChange({target: {value}}) {
      this.setState({value, copied: false});
    },
  
  
    onCopy() {
      this.setState({copied: true});
    },
  
  
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
  
  ReactDOM.render(<Copy/>, document.getElementById('container'));

export default Copy;