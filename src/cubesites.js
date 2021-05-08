import React from "react";
import "./cubesites.css"

function Cubesites(props) {

  let side=props.side;
  let myclass="worksites show-";

    return (
        <div>
          <div class="scenesites">
            <div class={myclass.concat(side)}>
              <div class="worksites__face worksites__face--front"></div>
              <div class="worksites__face worksites__face--back"></div>
              <div class="worksites__face worksites__face--right"></div>
              <div class="worksites__face worksites__face--left"></div>
              <div class="worksites__face worksites__face--top"></div>
              <div class="worksites__face worksites__face--bottom"></div>
            </div>
          </div>



        </div>
    )
}

export default Cubesites;