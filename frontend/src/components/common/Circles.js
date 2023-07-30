import React from "react"
import circleOne from "../../images/circle1.svg"
import circleTwo from "../../images/circle2.svg"
import circleThree from "../../images/circle3.svg"
import circleFour from "../../images/circle4.svg"
import circleFive from "../../images/circle5.svg"
import "../../css/Circles.css";
import liteRedeMobile from "../../images/lite_moobal_red.svg"

const Circles = () => {
    return (
        <div className="circles_container">
            <div className="circle_item">
                <img className="circle_one" src={circleOne}></img>
            </div>
            <div className="circle_item">
                <img className="circle_two" src={circleTwo}></img>
            </div>
            <div className="circle_item">
                <img className="circle_three" src={circleThree}></img>
            </div>
            <div className="circle_item">
                <img className="circle_four" src={circleFour}></img>
            </div>
            <div className="circle_item">
                <img className="circle_five" src={circleFive}></img>
            </div>
            <div className="circle_item">
                <div className="lite_circle_red"></div>
            </div>
            <div className="circle_item">
                <div className="lite_circle_purpur"></div>
            </div>
            <div className="circle_item">
                <div className="lite_purple "></div>
            </div>

        </div>
    )
}

export default Circles;