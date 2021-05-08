import React from "react";
import "./cubeimages.css"

function Cubeimages(props) {

  let side=props.side;
  let work=props.slide;
  let myclass="workimages show-";

    return (
        <div>
          <div class="sceneimages">
            <div class={myclass.concat(side)}>

              <div class="workimages__face workimages__face--front">
                <div className={"lcd"}></div>
                <div className={work ? "textlcdan" : "textlcd"}></div>
                <div className={"paragraph"} style={{position: "absolute", top: "180px", width: "300px", textAlign: "center"}}>A site about electronics.</div>
              </div>

              <div class="workimages__face workimages__face--back">
                <div className={"auto"}></div>
                <div className={"paragraph"} style={{position: "absolute", top: "200px", width: "300px", textAlign: "center"}}>A site for a mechanic garage.</div>
              </div>
              <div class="workimages__face workimages__face--right">right</div>
              <div class="workimages__face workimages__face--left">left</div>

              <div class="workimages__face workimages__face--top">
                <div className={"suspension"}></div>
                <div className={"paragraph"} style={{position: "absolute", top: "200px", width: "300px", textAlign: "center"}}>A site for a bodywork garage.</div>
              </div>

              <div class="workimages__face workimages__face--bottom">
                <div className={"portfolio"}></div>
              </div>

            </div>
          </div>



        </div>
    )
}

export default Cubeimages;