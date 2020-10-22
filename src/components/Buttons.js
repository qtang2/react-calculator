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
            <div className="buttons-container">
                <div className="left-container">
                    <button className='large-btn-h' id="clear" value="AC" onClick={this.buttonClick}>AC</button>
                    <button className='regular-btn operators-color' id="divide" value="/" onClick={this.buttonClick}>/</button>
                    <button className='regular-btn nums-color' id="seven" value="7" onClick={this.buttonClick}>7</button>
                    <button className='regular-btn nums-color' id="eight" value="8" onClick={this.buttonClick}>8</button>
                    <button className='regular-btn nums-color' id="nine" value="9" onClick={this.buttonClick}>9</button>
                    <button className='regular-btn nums-color' id="four" value="4" onClick={this.buttonClick}>4</button>
                    <button className='regular-btn nums-color' id="five" value="5" onClick={this.buttonClick}>5</button>
                    <button className='regular-btn nums-color' id="six" value="6" onClick={this.buttonClick}>6</button>
                    <button className='regular-btn nums-color' id="one" value="1" onClick={this.buttonClick}>1</button>
                    <button className='regular-btn nums-color' id="two" value="2" onClick={this.buttonClick}>2</button>
                    <button className='regular-btn nums-color' id="three" value="3" onClick={this.buttonClick}>3</button>
                    <button className='large-btn-h nums-color' id="zero" value="0" onClick={this.buttonClick}>0</button>
                    <button className='regular-btn' id="decimal" value="." onClick={this.buttonClick}>.</button>
                </div>
                <div className="right-container">
                    <button className='regular-btn operators-color' id="multiply" value="*" onClick={this.buttonClick}>*</button>
                    <button className='regular-btn operators-color' id="subtract" value="-" onClick={this.buttonClick}>-</button>
                    <button className='regular-btn operators-color' id="add" value="+" onClick={this.buttonClick}>+</button>
                    <button className='large-btn-v operators-color' id="equal" value="=" onClick={this.buttonClick}>=</button>
                </div>
            </div>
        )
    }
    
}

export default Buttons
