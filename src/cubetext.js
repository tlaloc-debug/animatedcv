import React from "react";
import "./cubetext.css"

function Cubetext(props) {

  let side=props.side;
  let myclass="worktext show-";

    return (
        <div>
          <div class="scenetext">
            <div class={myclass.concat(side)}>
              <div class="worktext__face worktext__face--front">
                <div className={"paragraphsmall"}>
                  <div>This is my very first project and it is divided into three sections:  </div>
                  <div>"technical" Contains a database showing the specifications of 158 microcontrollers.</div>
                  <div>"Manual" Contains a brief explanation of the basic components of a microcontroller. </div>
                  <div>"Shop" Contains a basic shopping cart. </div>
                </div>
                <br/>
                <div className={"small"} style={{display: "flex", alignItems: "center"}}>
                  <div style={{display: "inline-block"}}>Tested on:</div>
                  <div className={"browser chrome"}></div>
                  <div className={"browser firefox"}></div>
                </div>
              </div>

              <div class="worktext__face worktext__face--back">
              <div className={"paragraphsmall"}>
                  <div>This site is based on fixauto.com.</div>
                  <div>Presents some cosmetic changes and certain sections were removed. </div>
                  <div>Still working on this project.</div>
                  
                </div>
                <br/>
                <div className={"small"} style={{display: "flex", alignItems: "center"}}>
                  <div style={{display: "inline-block"}}>Tested on:</div>
                  <div className={"browser chrome"}></div>
                  <div className={"browser firefox"}></div>
                </div>
              </div>
              <div class="worktext__face worktext__face--right">
              <div className={"paragraphsmall horizontalcenter"}>
                  <div>My Portfolio</div>
                </div>
              </div>

              <div class="worktext__face worktext__face--left">
                <div className={"paragraphsmall"}>
                  <div>This is a really basic site made for a mechanic garage.</div>
                </div>
                <br/>
                <div className={"small"} style={{display: "flex", alignItems: "center"}}>
                  <div style={{display: "inline-block"}}>Tested on:</div>
                  <div className={"browser chrome"}></div>
                  <div className={"browser firefox"}></div>
                </div>
              </div>

              <div class="worktext__face worktext__face--top">top</div>
              <div class="worktext__face worktext__face--bottom">bottom</div>
            </div>
          </div>



        </div>
    )
}

export default Cubetext;