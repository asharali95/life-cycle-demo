import logo from './logo.svg';
import './App.css';
import react from 'react';
import LifeCycle from './Components/LifeCycle';

class App extends react.Component {
  state = {
    isShown:true,
    content: "Hi",
  }
  appendHi = () =>{
    this.setState({
      content: `${this.state.content} Hi`
    })
  }

  toggleComponent = () =>{
    this.setState({
      isShown: !this.state.isShown
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.toggleComponent}>Toggle Life Cycle</button>
        <button onClick={this.appendHi}>Add text</button>
        {/* conditional Rendering */}
        {this.state.isShown ? <LifeCycle content={this.state.content}/> : null}
        </header>
      </div>
    );
  }
}

export default App;
