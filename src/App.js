import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Formula from './components/Formula';
import Output from './components/Output';


const operators=['+',"-","*","/"]
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      formula:'',
      display:'0',
      calc: undefined,
      curNum: '0',
      operation: undefined
    }

    this.handle = this.handle.bind(this)
  }


  reset = ()=>{
    this.setState({curNum:'0',calc:undefined,operation:undefined,formula:'',display:'0'})
  }

  calcResult = (expression)=>{
    return (Math.round(1000000000000*eval(expression))/1000000000000).toString(10)
  }

  maxDigitsWarning=()=>{
    this.setState({display: "Digit limit met"})
    setTimeout(() => {
      this.setState(state=>({display: state.curNum}))
    }, 1000);
  }

  handle(e){
    const {value} = e.target
    const {formula,curNum,calc,operation,display} = this.state

    if(!Number.isNaN(Number(value))){
      if(formula.includes('=')){
        this.setState({
          curNum: value,formula:value,display:value,calc:undefined,operation:undefined})
        return
      }else{
        if(curNum ==='0'){
          this.setState({
            curNum: value,formula:formula+value,display:value})
        }else{
          if(curNum.length>12){
            this.maxDigitsWarning()
          }else{
            this.setState({
              curNum: curNum+value,formula:formula+value,display:display+value})
          }
          
        }
      }
      
      return
    }

    

    switch(value){
      case 'AC':
          this.reset()
          break
      case '.':
        if(!curNum.includes('.')){
          this.setState({curNum: curNum+value,formula:formula+value})
        }
        break

      default:
        console.log("enter default")
        //if operator is empty
        if(!operation){
          //enter a number and enter '='
          if(value==='='){
            this.setState({
              operation:value,
              calc: curNum,
              curNum:'0',
              formula: formula+value+curNum,
              display:curNum
            })
          }else{
            this.setState({
              operation: value,
              calc: curNum,
              curNum:'0',
              formula:formula+value,
              display:value
            })
          }
          
        } else if(value==='='){
          //click = after already calculated
          if(formula.includes('=')){
            break
          }else{
            if(operators.includes(formula[formula.length-1])){
              this.setState({
                operation: value,
                curNum: '0',
                formula: formula.slice(0,formula.length-1)+value+calc,
                display:calc
                })
            }
            else{
              const evaluated = this.calcResult(`${calc}${operation}${curNum}`)
              this.setState({
              operation: value,
              calc: evaluated,
              curNum: "0",
              formula: formula+value+evaluated,
              display:evaluated
              })
            }
          }
          
        }else{
            if(formula.includes("=")){
              this.setState({
                operation:value,
                curNum: '0',
                formula:calc+value,
                display:value
              })
            }else{
              const evaluated = this.calcResult(`${calc}${operation}${curNum}`)
              console.log(typeof formula)
              this.setState({
                operation:value,
                calc: evaluated,
                curNum: '0',
                formula:operators.includes(formula[formula.length-1])? (formula.slice(0,formula.length-1)+value) : formula+value,
                display:value
              })
            }
            
          }
        }
    }

  render(){
    const {formula,display} = this.state
    return (
      <div className="App">
      <div>
        <h2>Welcome to Claculator</h2>
        <p>This calculator is using immediate execution logic, click to calculate</p>
      </div>
        <div className="calculator-container">
          <Formula formula={formula}/>
          <Output currentValue={display}/>
          <Buttons onClick={this.handle}/>
        </div>
        <label>© Qian Tang  2020</label>
      </div>
    );
  }
  
}

export default App;
