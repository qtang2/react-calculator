import React from 'react'
import '../App.css'

function Output(props) {
    return (
        <div id="display">
            {props.currentValue}
        </div>
    )
}

export default Output
