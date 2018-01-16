import React from 'react';
import ReactDOM from 'react-dom';
var Lorem = require ('react-lorem-component');




class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '1'};
      this.state = {seed: 42};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleClick(e) {
      e.preventDefault();
      this.setState({ seed: Math.floor(Math.random() * 10000 ) });
    }
  
    render() {
      return (
        <div className="coin-basse">
          <h1>IpsumCoin</h1>
          <div className="customer-questions">
          <h2>Do you have a new coin on the market?</h2>
          <h2>Not ready to fill in your <span>About</span> section yet?</h2>
          <h2>Look no further than IpsumCoin</h2>

          </div>
          <form>
            <label>
            <h3>Select a number of paragraphs:</h3>
            <select value={this.state.value} onChange={(event)=>{this.handleChange(event)}}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select>  
            <button onClick={(e)=>{this.handleClick(e)}}>Randomize Text</button>
            </label>
        </form>
          <div className="container" id="container" >
              <Lorem count={this.state.value} words= {ipsumCoin.article.sentences} sentenceUpperBound={4} paragraphUpperBound={1} seed={this.state.seed} className="box"/>
          </div>
        </div>
       
      );
    }
  }

  function updateTransition() {
    var el = document.querySelector("div.box");
     
    if (el) {
      el.className = "box1";
    } else {
      el = document.querySelector("div.box1");
      el.className = "box";
    }
     
    return el;
  }
  
  var intervalID = window.setInterval(updateTransition, 7000);

const ipsumCoin = {
  article: {
      sentences: ["Bitcoin", "markets", "are at the very least", "Being manipulated", "price manipulation", "because the market was very thin", "various cryptocurrencies", "including early Bitcoin.", "If Bitcoin wants to be taken seriously", "it probably shouldn’t be this easy or legal to manipulate the markets.","I’ve been watching this bitcoin situation", "assuming it would just blow over", "You should not invest in Bitcoin.", "Invest in Bitcoin","We need to separate the usefulness of the underlying technology called “blockchain”", "from the mania of people turning bitcoin", "is a big dumb lottery.", "That's what’s happening with bitcoin.", "You all made a lot of noise about decentralization", "someone finally went and measured it for Bitcoin and Ethereum", "Bitcoin vs Bitcoin Cash","What's the Difference?", "More transactions", "should be viewed as a good thing", "if Bitcoin is to grow and succeed", "The Bitcoin whitepaper describes how the system should function as money", "and the problems it solves", "Bitcoin mining serves", "to both add transactions to the block chain and to", "Release new Bitcoin.", "The rewards incentivize mining", "and include both the transaction fees", "(paid to the miner in the form of Bitcoin)", "as well as the newly released Bitcoin.","put our money and faith in a mathematical framework", "free of politics and human error", "Bitcoin may be the TCP/IP of money.", "World governments will have to readjust.", "Bitcoin is the beginning of something great", "a significant threat to the currency domination", "I'm a big fan of Bitcoin.","The idea of digital money—convenient and untraceable, liberated from the oversight of governments and banks", "every effort to create virtual cash had foundered.","Nakamoto", "Satoshi","should function as money"]
  }
};
ReactDOM.render(<App />, document.getElementById('app'));
