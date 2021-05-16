import React from 'react'; 
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    count:0
  }
  }

  handleClickAdd(){
    this.setState({
    count: this.state.count+1
    })
  }

  handleClickSub(){
    this.setState({
    count: this.state.count-1
    })
  }

render(){
  return(
    <div className="App">
        <h2>{this.state.count}</h2>
         <button onClick = {() => this.handleClickAdd()}>
        +
        </button>
        <button onClick = {() => this.handleClickSub()}>
        -
        </button>
       </div>
  );
}
}
export default App;
