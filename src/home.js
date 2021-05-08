import React, { useState } from "react";
import "./index.css";
import photo from "./photo.png";
import Axios from "axios";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Home() {

    const [contact, setcontact] = useState(false);

    const seecontact = () => {
      setcontact(true);
    }

    const closecontact = () => {
      setcontact(false);
    }

    return (
     
        <div>
          
          <div className={"centered"} >

            <div className={contact ? "innerback" : "inner"}>
                <div className={"front"}>

                  <div style={{display: "flex"}}>
                    <div style={{width: "750px", marginTop: "50px"}}>
                      <div className={"big"}>
                        <div >hi, i'm erick diaz a</div>
                        <div style={{color: "#5C2CB4"}}> front-end developer</div>
                      </div><br/>
              
                      <div className={"small"}>I am a mechatronic engineer and self-taught developer with a passion for programming.</div><br/>
                  
                    
                      <div style={{display: "flex", justifyContent: "left"}}>

                        <div className={"contactcontainer"}>
                          <div className={"contactme"}></div>
                          <div className={"contactmetext"} onClick={seecontact}>Contact me</div>
                        </div>

                      </div>

                    </div>

                    <div className={"photocontainer"} >
                      <div className={"circle"}></div>
                      <img className={"photo"} src={photo} alt=""/>
                    </div>
                  </div>

                </div>

                <div className={"back small"}>
                  
                  <div className={"space"} style={{width: "100%", height: "100%"}}>

                  <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                      <div >
                        <div style={{width: "230px", textAlign: "center"}}>Email</div><br/>
                        <div style={{width: "230px", textAlign: "center"}}>pelondinho@hotmail.com</div>
                      </div>
                    </div>

                    <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                      <div >
                        <div style={{width: "230px", textAlign: "center"}}>Telephone</div><br/>
                        <div style={{width: "230px", textAlign: "center"}}>514-717-6664</div>
                      </div>
                    </div>
                    
                  </div>
                  <br/>
                  <div onClick={closecontact} style={{position: "absolute", right: "20px", bottom: "20px", cursor: "pointer"}}>go back</div>
                  
                </div>
               
            </div>
          </div>
            
        </div>
       
    )
}

export default Home;