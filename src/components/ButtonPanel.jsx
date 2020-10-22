import React from 'react'
import Button from './Button'

const ButtonPanel = props => {
    return (
        <div className={"d-flex button-panel"}>
            <div className="group1 h-100">
                <Button name="AC" color="light-gray-backg"/>
                <Button name="+/-" color="light-gray-backg"/>
                <Button name="%" color="light-gray-backg"/>
                <Button name="÷"/>
            </div>
            <div className="group2 h-100">
                <Button name="7" color="light-gray-backg"/>
                <Button name="8" color="light-gray-backg"/>
                <Button name="9" color="light-gray-backg"/>
                <Button name="X"/>
            </div>
            <div className="group3 h-100">
                <Button name="4" color="light-gray-backg"/>
                <Button name="5" color="light-gray-backg"/>
                <Button name="6" color="light-gray-backg"/>
                <Button name="-"/>
            </div>
            <div className="group4 h-100">
                <Button name="1" color="light-gray-backg"/>
                <Button name="2" color="light-gray-backg"/>
                <Button name="3" color="light-gray-backg"/>
                <Button name="+"/>
            </div>
            <div className="group5 h-100">
                <Button name="0" color="light-gray-backg" wide={true}/>
                <Button name="." color="light-gray-backg"/>
                <Button name="="/>

            </div>
            
        </div>
    )
}



export default ButtonPanel
