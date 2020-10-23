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

    // this.handleClick= this.handleClick.bind(this)
    this.handle = this.handle.bind(this)
  }

  // validDigits = ()=>
  //   this.state.formula.length<23
  

  reset = ()=>{
    this.setState({curNum:'0',calc:undefined,operation:undefined,formula:'',display:'0'})
  }

  calcResult = (expression)=>{
    return (Math.round(1000000000000*eval(expression))/1000000000000).toString(10)
  }

  maxDigitsWarning=()=>{
    const {curNum,display} = this.state
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
          console.log("!!!!!!")
          // console.log("before ,,,, "+ "value" + value + " "+ formula + " "+display +" "+ curNum)
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

  
  //TODO: Need to handle max digits and after equal, not allow input
  // handleClick(value){
  //   console.log(value)
  //   console.log("currentValue   "+ this.state.currentValue)
  //     switch (value){
  //       case '1':
  //       case '2':
  //       case '3':
  //       case '4':
  //       case '5':
  //       case '6':
  //       case '7':
  //       case '8':
  //       case '9':
          
  //           if(this.state.currentValue ==='0'){
  //             this.setState({currentValue:value,formula:value})
  //             break
  //           }
  //           else if(this.state.currentValue[this.state.currentValue.length-1] ==='.'){
  //             this.setState(state=>
  //               ({currentValue:this.state.currentValue + value, formula:state.formula + value}))
  //             break
  //           }
  //           else if(operators.includes(this.state.currentValue)){
  //             this.setState(state=>
  //               ({currentValue: value, formula:state.formula + value}))
  //             break
  //           }
  //           else{
  //             this.setState(state=>
  //               ({currentValue:state.currentValue+value,formula: state.formula+value}))
  //             break
  //           }
          
          
  
  //       case '0':
  //         if(this.state.formula ===''){
  //           this.setState({currentValue:value,formula:value})
  //           break
  //         }
  //         else if(this.state.formula==='0'){
  //           break
  //         }
  //         else if(this.state.formula.includes("=")){
  //           this.reset()
  //           break
  //         }
  //         else {
  //           this.setState(state=>
  //             ({currentValue:state.currentValue+value,formula: state.formula+value}))
  //           break
  //         }
        
  //       case '.':
  //         if(this.state.currentValue ==='0'){
  //           this.setState(state =>
  //             ({currentValue: state.currentValue+value, formula:state.currentValue+value}))
  //           break
  //         }
  //         else{
  //           if(!operators.includes(this.state.currentValue))
  //           this.setState(state=>
  //             ({currentValue:state.currentValue+value,formula: state.formula+value}))
  //           break
  //         }
     
  //       case '+':
  //       case '*':
  //       case '/':
  //         if(this.state.formula.length!==0){
  //           if(!operators.includes(this.state.currentValue))
  //           this.setState(state=>
  //             ({currentValue:value,formula: state.formula+value}))
  //           break
  //         }else{
  //           break
  //         }
  
  //       case '-':
  //         if(this.state.formula.length!==0){
  //           if(this.state.currentValue!=='-'){
  //             this.setState(state=>
  //               ({currentValue:value,formula: state.formula+value}))
  //             break
  //           }else{
  //             break
  //           }
            
  //         }else{
  //           this.setState({currentValue:value,formula:value})
  //           break
  //         }
  
  //       case '=':
  //         var result= Math.round(1000000000000 * eval(this.state.formula)) / 1000000000000
  //         this.setState(state=>
  //           ({currentValue:result, formula:state.formula+value+result}))
  //         break
          
  //       case 'AC':
  //         this.reset()
  //         break
        
  //       default:
  //         console.log("default")
  //         break;
  //     }    
  // }

  render(){
    const {formula,curNum,calc,display} = this.state
    return (
      <div className="App">
      <p>{JSON.stringify(this.state)}</p>
      <p>{formula}</p>
      <div>
        <h2>Welcome to Claculator</h2>
        <p>Click to calculate</p>
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
