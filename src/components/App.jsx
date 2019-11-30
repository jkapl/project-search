import React from 'react';
import Search from './Search';
import Results from './Results';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {term: '', results: ''};
    this.handleTyping = this.handleTyping.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  handleTyping (event) {
    this.setState({term: event.target.value}); 
    this.getResults(event.target.value);
  }

  getResults (term) {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(data => {
      console.log(data);
      this.setState({results: data.title});
    });
  }


  render() {
    return (
      <div>
        <form>
          <label>
            Search: 
              <input type="text" value={this.state.value} onChange={this.handleTyping}></input>
          </label>
        </form>
        <h1>{this.state.term}</h1>
        <h2>{this.state.results}</h2>
      </div>
    );
  }
}

export default App;