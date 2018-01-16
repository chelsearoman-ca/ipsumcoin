var React = require('react');
var ReactDOM = require ('react-dom');
var Lorem = require('react-lorem-component');
import Copy from './Random';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }

    // copyToClipboard = (e) => {
    //   this.textArea.select();
    //   document.execCommand('copy');
    //   // This is just personal preference.
    //   // I prefer to not show the the whole text area selected.
    //   e.target.focus();
    //   this.setState({ copySuccess: 'Copied!' });
    // };
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log("this handle change");
    }
  
  
    render() {
      return (
        <div>
          <form>
            <label>
            Pick your favorite La Croix flavor:
              <select value={this.state.value} onChange={(event)=>{this.handleChange(event)}}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select>
            </label>
        </form>
        document.queryCommandSupported('copy') &&
              <div>
                <button onClick={this.copyToClipboard}>Copy</button> 
                {this.state.copySuccess}
              </div>
          <div className="container" id="container"  ref={(textarea) => this.textArea = textarea}>
              <Lorem count={this.state.value} words= {ipsumCoin.article.sentences} sentenceUpperBound={4} paragraphUpperBound={1} ref={(textarea) => this.textArea = textarea}/>
          </div>
        </div>
       
      );
    }
  }


const ipsumCoin = {
  article: {
      sentences: ["Bitcoin", "markets", "are at the very least", "Being manipulated", "price manipulation", "because the market was very thin", "various cryptocurrencies", "including early Bitcoin.", "If Bitcoin wants to be taken seriously", "it probably shouldn’t be this easy or legal to manipulate the markets.","I’ve been watching this bitcoin situation", "assuming it would just blow over", "You should not invest in Bitcoin.", "Invest in Bitcoin","We need to separate the usefulness of the underlying technology called “blockchain”", "from the mania of people turning bitcoin", "is a big dumb lottery.", "That's what’s happening with bitcoin.", "You all made a lot of noise about decentralization", "someone finally went and measured it for Bitcoin and Ethereum", "Bitcoin vs Bitcoin Cash","What's the Difference?", "More transactions", "should be viewed as a good thing", "if Bitcoin is to grow and succeed", "The Bitcoin whitepaper describes how the system should function as money", "and the problems it solves", "Bitcoin mining serves", "to both add transactions to the block chain and to", "Release new Bitcoin.", "The rewards incentivize mining", "and include both the transaction fees", "(paid to the miner in the form of Bitcoin)", "as well as the newly released Bitcoin.","put our money and faith in a mathematical framework", "free of politics and human error", "Bitcoin may be the TCP/IP of money.", "World governments will have to readjust.", "Bitcoin is the beginning of something great", "a significant threat to the currency domination", "I'm a big fan of Bitcoin."]
  }
};
ReactDOM.render(<App />, document.getElementById('app'));
