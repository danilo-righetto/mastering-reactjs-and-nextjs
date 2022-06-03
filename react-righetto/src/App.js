import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'Danilo Righetto',
  //     age: 28
  //   };

  //   // Realizando o bind do React para obter o estado
  //   // this.handlePClick = this.handlePClick.bind(this);
  // }

  // Usando userFields
  state = {
    name: 'Danilo Righetto',
    age: 28
  };

  handlePClick = () => {
    const { name } = this.state;
    console.log(`<p></p> click ${name}`);
    this.setState({ name: 'Ana' });
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { age } = this.state;
    console.log(age);
    this.setState({ age: age + 1 });
  }

  render() {
    const { name, age } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            Name: {name} - Age: {age}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

export default App;
