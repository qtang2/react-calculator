import React, { Component } from 'react'
import '../App.css'

class Buttons extends Component {

    constructor(props){
        super(props)

        this.buttonClick= this.buttonClick.bind(this)
    }

    buttonClick(e){
        const value = e.target.value
        this.props.onClick(value)
    }

    render(){
        return (
            <div className="button-container">
                <button className='regular-btn' id="clear" value="AC" onClick={this.buttonClick}>AC</button>
                <button className='regular-btn' id="addsub" value="CE" onClick={this.buttonClick}>CE</button>
                <button className='regular-btn' id="modulus" value="%" onClick={this.buttonClick}>%</button>
                <button className='regular-btn' id="divclassName='regular-btn' ide" value="/" onClick={this.buttonClick}>/</button>
                <button className='regular-btn' id="seven" value="7" onClick={this.buttonClick}>7</button>
                <button className='regular-btn' id="eight" value="8" onClick={this.buttonClick}>8</button>
                <button className='regular-btn' id="nine" value="9" onClick={this.buttonClick}>9</button>
                <button className='regular-btn' id="multiply" value="*" onClick={this.buttonClick}>*</button>
                <button className='regular-btn' id="four" value="4" onClick={this.buttonClick}>4</button>
                <button className='regular-btn' id="five" value="5" onClick={this.buttonClick}>5</button>
                <button className='regular-btn' id="six" value="6" onClick={this.buttonClick}>6</button>
                <button className='regular-btn' id="subtract" value="-" onClick={this.buttonClick}>-</button>
                <button className='regular-btn' id="one" value="1" onClick={this.buttonClick}>1</button>
                <button className='regular-btn' id="two" value="2" onClick={this.buttonClick}>2</button>
                <button className='regular-btn' id="three" value="3" onClick={this.buttonClick}>3</button>
                <button className='regular-btn' id="add" value="+" onClick={this.buttonClick}>+</button>
                <button className='regular-btn' id="zero" value="0" onClick={this.buttonClick}>0</button>
                <button className='regular-btn' id="decimal" value="." onClick={this.buttonClick}>.</button>
                <button className='regular-btn' id="equal" value="=" onClick={this.buttonClick}>=</button>
            </div>
        )
    }
    
}

export default Buttons
