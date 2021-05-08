import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Cube(props) {

  let plc=props.start;

    return (
        <div>
            <div class="scene">
              <div className={plc ? "cubean" : "cube"}>
                <div class="cube__face cube__face--front"></div>
                <div class="cube__face cube__face--back"></div>
                <div class="cube__face cube__face--right"></div>
                <div class="cube__face cube__face--left"></div>
                <div class="cube__face cube__face--top"></div>
                <div class="cube__face cube__face--bottom"></div>
              </div>
            </div>

        </div>
    )
}

export default Cube;