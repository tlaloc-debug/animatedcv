import React from "react";
import "./cubetitle.css"

function Cubetitle(props) {

  let side=props.side;
  let myclass="worktitle show-";

    return (
        <div>
          <div class="scenetitle">
            <div class={myclass.concat(side)}>
              <div class="worktitle__face worktitle__face--front">- chooseyourpic.com -</div>
              <div class="worktitle__face worktitle__face--back">Cesar Bodyshop</div>
              <div class="worktitle__face worktitle__face--right">www.alinacionybalanceojulioregalado.com</div>
              <div class="worktitle__face worktitle__face--left"><div className={"portfoliotop"}></div></div>
              <div class="worktitle__face worktitle__face--top">top</div>
              <div class="worktitle__face worktitle__face--bottom">bottom</div>
            </div>
          </div>



        </div>
    )
}

export default Cubetitle;