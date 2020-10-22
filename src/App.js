import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Formula from './components/Formula';
import Output from './components/Output';


const operators=['+',"-","*","/","%","AC","="]
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      formula:'',
      currentValue:'0',
    }

    this.handleClick= this.handleClick.bind(this)
  }


  reset = ()=>{
    this.setState({currentValue:'0',formula:''})
  }

  handleClick(value){
    console.log(value)
    console.log("currentValue   "+ this.state.currentValue)
    switch (value){
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(this.state.currentValue ==='0'){
          this.setState({currentValue:value,formula:value})
          break
        }
        else if(this.state.currentValue[this.state.currentValue.length-1] ==='.'){
          this.setState(state=>
            ({currentValue:this.state.currentValue + value, formula:state.formula + value}))
          break
        }
        else if(operators.includes(this.state.currentValue)){
          this.setState(state=>
            ({currentValue: value, formula:state.formula + value}))
          break
        }
        else{
          this.setState(state=>
            ({currentValue:state.currentValue+value,formula: state.formula+value}))
          break
        }

      case '0':
        if(this.state.formula ===''){
          this.setState({currentValue:value,formula:value})
          break
        }
        else if(this.state.formula==='0'){
          break
        }
        else if(this.state.formula.includes("=")){
          this.reset()
          break
        }
        else {
          this.setState(state=>
            ({currentValue:state.currentValue+value,formula: state.formula+value}))
          break
        }
      
      case '.':
        if(this.state.currentValue ==='0'){
          this.setState(state =>
            ({currentValue: state.currentValue+value, formula:state.currentValue+value}))
          break
        }
        else{
          if(!operators.includes(this.state.currentValue))
          this.setState(state=>
            ({currentValue:state.currentValue+value,formula: state.formula+value}))
          break
        }
   
      case '+':
      case '*':
      case '/':
        if(this.state.formula.length!==0){
          if(!operators.includes(this.state.currentValue))
          this.setState(state=>
            ({currentValue:value,formula: state.formula+value}))
          break
        }else{
          break
        }

      case '-':
        if(this.state.formula.length!==0){
          if(this.state.currentValue!=='-'){
            this.setState(state=>
              ({currentValue:value,formula: state.formula+value}))
            break
          }else{
            break
          }
          
        }else{
          this.setState({currentValue:value,formula:value})
          break
        }

      case '=':
        var result= eval(this.state.formula)
        this.setState(state=>
          ({currentValue:result, formula:state.formula+value+result}))
        console.log(result)
        break
        
      case 'AC':
        this.reset()
        break
      
      default:
        console.log("default")
        break;
    }
  }

  render(){
    return (
      <div className="App">
      <div>
      <h2>Welcome to Claculator</h2>
      <p>Click to calculate</p>
      </div>
      
        <div className="calculator-container">
          <Formula formula={this.state.formula}/>
          <Output currentValue={this.state.currentValue}/>
          <Buttons onClick={this.handleClick}/>
        </div>
        <label>© Qian Tang  2020</label>
      </div>
    );
  }
  
}

export default App;
