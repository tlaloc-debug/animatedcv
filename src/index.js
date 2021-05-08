import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { FullPage, Slide } from 'react-full-page';
import PropTypes from 'prop-types';
import "./index.css"
import "./controls.css";
import Home from "./home.js";
import "./home.css";
import university from "./university.png";
import school from "./school.png";
import upa from "./upa.jpg";
import aviron from "./aviron.jpg";
import "./education.css";
import laptop from "./laptop.png";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import php from "./php.png";
import node from "./node.png";
import sql from "./sql.png";
import laptop2 from "./laptop2.png";
import "./web.css";
import production from "./production.png";
import robot from "./robot2.png";
import gear from "./gear.png";
import armright from "./armred.png";
import armleft from "./armredleft.png";
import "./plc.css";
import cube from "./piecebase.png";
import "./cnc.css";
import armbase from "./armbase.png";
import armarm from "./armarm.png";
import armfinal from "./armfinal.png";
import "./robotics.css";
import Ojos from "./ojos.js";
import Cube from "./cube.js";
import "./cube.css";
import "./projects.css";
import { Github } from 'react-bootstrap-icons';
import { Globe } from 'react-bootstrap-icons';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import Cubesites from "./cubesites.js";
import Cubeimages from "./cubeimages.js";
import Cubetitle from "./cubetitle.js";
import Cubetext from "./cubetext.js";

function FullPageExample () {

    const [education, seteducation] = useState(false);
    const [web, setweb] = useState (false);
    const [work, setwork] = useState (false);
    const [plc,setplc] = useState(false);
    const [cnc,setcnc] = useState(false);
    const [android,setandroid] = useState(false);
    const [controls,setcontrols] = useState(true);

    let link=[
      {site: "https://choseyourpic.herokuapp.com/", code: "https://github.com/tlaloc-debug/choseyourpic"},
      {site: "http://www.alineacionybalanceojulioregalado.com/", code: "https://github.com/tlaloc-debug/julio"},
      {site: "https://garagecopy.herokuapp.com/", code: "https://github.com/tlaloc-debug/garagecopy"},
      {site: "", code: ""}
    ];

    let sides=["front","bottom","back","top"];
    const [index, setindex] = useState(0);

    const changeafter = (stateafter) => {

      if (stateafter.to===1) {
        seteducation(true)
      } else {
        seteducation(false)
      }

      if (stateafter.to===2) {
        setweb(true)
      } else {
        setweb(false)
      }

      if (stateafter.to===3) {
        setwork(true)
      } else {
        setwork(false)
      }
      

      if (stateafter.to===4) {
        setplc(true)
      } else {
        setplc(false)
      }

      if (stateafter.to===5) {
        setcnc(true)
      } else {
        setcnc(false)
      }

      if (stateafter.to===6) {
        setandroid(true)
      } else {
        setandroid(false)
      }

    }

    const changebefore = (statebefore) => {
      if (statebefore.to===0) {
        setcontrols(true)
      } else {
        setcontrols(false)
      }

    }

    const next = () => {
      if (index<3) {setindex(index+1)} 
    }

    const prev = () => {
      if (index>0) {setindex(index-1)}
    }
  
    class CustomControls extends React.Component {
      static propTypes = {
        className: PropTypes.string,
        getCurrentSlideIndex: PropTypes.func.isRequired,
        onNext: PropTypes.func.isRequired,
        onPrev: PropTypes.func.isRequired,
        scrollToSlide: PropTypes.func.isRequired,
        slidesCount: PropTypes.number.isRequired,
        style: PropTypes.object,
      }
    
      static defaultProps = {
        className: 'full-page-controls',
        style: {
          position: 'fixed',
          width: "90%",
          height: "100%",
          marginLeft: "10%",
          zIndex: +1,
        },
      }
    
      

      renderSlidesNumbers(currentSlideIndex) {
        const { scrollToSlide } = this.props;
        const slidesNumbers = [];
        slidesNumbers.push(<div className={"homeicon"} onClick={() => scrollToSlide(0)}>{controls ? "home" : ""}</div>)
        slidesNumbers.push(<div className={education ? "educationiconan" : "educationicon"} onClick={() => scrollToSlide(1)}>{controls ? "education" : ""}</div>)
        slidesNumbers.push(<div className={web ? "codeiconan" : "codeicon"} onClick={() => scrollToSlide(2)}>{controls ? "programming" : ""}</div>)
        slidesNumbers.push(<div className={work ? "workiconan" : "workicon"} onClick={() => scrollToSlide(3)}>{controls ? "projects" : ""}</div>)
        slidesNumbers.push(<div className={plc ? "moreiconan" : "moreicon"} onClick={() => scrollToSlide(4)}>{controls ? "+ programacion" : ""}</div>)
        return slidesNumbers;
      }
    
      render() {
        const {getCurrentSlideIndex, style, className} = this.props;
        const currentSlideIndex = getCurrentSlideIndex();
    
        return (
          <div className={className} style={style}>
            
            {this.renderSlidesNumbers(currentSlideIndex)}
            
          </div>
        );
      }
    }
  
    return (<div>
      <FullPage duration={500} controls={CustomControls}  controlsProps={{className: controls ? 'classnameone' : "classnametwo"}} afterChange={(ischangeafter) => {changeafter(ischangeafter)}} beforeChange={(ischangebefore) => {changebefore(ischangebefore)}}>

        <Slide>
          <Home />
          
        </Slide>

        <Slide>
                   
          <div className={"school"}>

            <div style={{width: "800px", display: "flex", justifyContent: "space-around", paddingTop: "100px"}}>

              <div className={education ? "universityan" : "university"}>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <img style={{width: "100px", marginTop: "20px"}} src={university} alt=""/>    
                </div>
                <br/>
                <div className={"paragraph"} style={{fontSize: "1em", textAlign: "center", width: "100%"}}>Polytechnic University</div>
                <br/>
                <div className={"paragraph"} style={{fontSize: "1em", textAlign: "center", width: "100%"}}>Mechatronics Engineering</div>
                      
              </div>

              <div className={education ? "avironan" : "aviron"}>
                <div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <img style={{width: "100px", marginTop: "20px", marginBottom: "30px"}} src={school} alt=""/>
                  </div>
                  <br/>
                  <div className={"paragraph"} style={{fontSize: "1em", textAlign: "center", width: "100%"}}>Aviron Technical Institue</div>
                  <br/>
                  <div className={"paragraph"} style={{fontSize: "1em", textAlign: "center", width: "100%"}}>Welding</div>
                </div>

              </div>
            </div>


              <div style={{position: "absolute", width: "800px", display: "flex", justifyContent: "space-around", paddingTop: "100px"}}>
              <div className={"student"}>
                <div className={"studentemoji"}></div>
              </div>
             

              <div className={"welder"}>
                <div className={"welderemoji"}></div>
              </div>
              <div className={"civil"}></div>

              </div>

            </div>
          

          <div className={"eyes"}><Ojos greeting={education} /></div>

          <div className={"schoollogos"}>

            <div className={education ? "holaan" : "hola"}> 

              <div className={"titulo"}>
                  <img style={{width: "200px"}} src={upa} alt=""/>
                  <div style={{width: "200px"}}>
                    <div className={"paragraph"} >Diploma</div>
                    <div className={"paragraph"} >4 years</div>
                  </div>
              </div>

              <div style={{width: "200px"}}></div>

              <div className={"titulo"}>
                <img style={{width: "200px"}} src={aviron} alt=""/>
                <div style={{width: "200px"}}>
                  <div className={"paragraph"} >DEP</div>
                  <div className={"paragraph"} >1800 hours</div>
                </div>
              </div>

            </div>

          </div>

        </Slide>
          

        <Slide>
         
            <div className={"verticalcenter"}>
          <div className={"boxweb"}>
            

            <div className={"paragraph"} style={{position: "absolute", width: "300px", height: "300px", top: "300px", left: "100px"}}>knowledge of technologies such as HTML, CSS, JavaScript and React for <span style={{color: "#5C2CB4", fontWeight: "bold"}}>Front-End</span> development of a web site.</div>
            <div className={"paragraph"} style={{position: "absolute", width: "300px", height: "300px", top: "350px", left: "850px"}}>As well as PHP, NodeJS and Mysql for <span style={{color: "#5C2CB4", fontWeight: "bold"}}>Back-End</span> side.</div>

                <div style={{position: "relative", width: "300px", height: "400px"}}>
                <img style={{position: "absolute", width: "300px", bottom: "0px"}} src={laptop} alt=""/>
                <img style={{position: "absolute", width: "300px", bottom: "0px", zIndex: +1}} src={laptop2} alt=""/>
                </div>
                <div className={web ? "reactlogoan" : "reactlogo"}>
                    <img className={web ? "htmlrotatean" : "htmlrotate"} src={html} alt=""/>
                    <img className={web ? "cssrotatean" : "cssrotate"} src={css} alt=""/>
                    <img className={web ? "jsrotatean" : "jsrotate"} src={js} alt=""/>
            
                    <img className={web ? "reactrotatean" : "reactrotate"} src={react} alt=""/>
                </div>
                <div className={web ? "mysqllogoan" : "mysqllogo"}>
                    <img className={web ? "phprotatean" : "phprotate"} src={php} alt=""/>
                    <img className={web ? "noderotatean" : "noderotate"} src={node} alt=""/>
                    <img className={web ? "sqlrotatean" : "sqlrotate"} src={sql} alt=""/>
                </div>

                
                
          </div>
          </div>
         
          
        </Slide>

        <Slide>
        <div className={"verticalcenter"} >
         
          <div style={{position: "relative", height: "500px"}}>

            <div className={"paragraph"} style={{ borderBottom: "solid"}}>Controls</div>
          
            <div className={"globe"}><a href={link[index].site} ><Globe size={40}/></a> 
              <div className={"visitar"}></div>
            </div>
        
            <div className={"github"}><a href={link[index].code} ><Github size={40}/></a> 
              <div className={"codigo"}></div>
            </div>

            <div className={"arrowright"} onClick={next}><ArrowRightCircle size={40}/>
              <div className={"siguiente"}></div>
            </div>

            <div className={"arrowleft"} onClick={prev}><ArrowLeftCircle size={40}/>
              <div className={"anterior"}></div>
            </div>

          </div>
         
        
        <div className={"cubes"}>
          <div style={{marginLeft: "100px"}}><Cubetitle side={sides[index]}/></div>
          <div style={{display: "inline-block", marginLeft: "100px"}}><Cubesites side={sides[index]}/></div>
          <div style={{display: "inline-block"}}><Cubeimages side={sides[index]} slide={work}/></div>
          <div ><Cubetext side={sides[index]}/></div>
        </div>
        </div>
        </Slide>

        <Slide>
        <div className={"verticalcenter"} >
          <div className={"boxplc"}>
          
            <div > 

            <div style={{width: "1200px"}}>
                <div style={{width: "450px", position: "relative", display: "inline-block", marginLeft: "50px"}}>
                  <img style={{width: "400px", marginLeft: "20px", marginTop: "30px"}} src={production} alt=""/> 
                  <div className={plc ? "greenboxan" : "greenbox"}></div>
                  <img className={plc ? "biggearan" : "biggear"} src={gear} alt=""/>
                  <img className={plc ? "smallgearan" : "smallgear"} src={gear} alt=""/>
                  <div className={plc ? "bluecirclean" : "bluecircle"}></div>
                </div>

                <div className={"paragraphsmall"} style={{ width: "550px", position: "relative", display: "inline-block"}}>
                  <h3>PLC programming</h3>
                  <div style={{width: "300px"}}>
                    A PLC is a device used by companies to control the different tools of a production line. 
                  </div> <br/>
                  <div style={{width: "300px"}}>It can be programmed using C language or with ladder logic. </div>
                  <div style={{position: "absolute", right: "0px", bottom: "0px", width: "200px", height: "200px", backgroundColor: "#5C2CB4", opacity: "0.9", borderRadius: "200px 0px 0px 0px" }}></div>
                  <div className={"plcimage"}></div>
                </div>

            </div>

              <div style={{width: "1100px", marginTop: "50px"}} className={"horizontalcenter"}>

              <div className={"paragraphsmall"} style={{width: "500px", height: "230px", position: "relative", marginRight: "50px"}}>
                  <h3>Pic programming</h3>
                  <div>
                    A Pic (microcontroller) is a device similar to a processor and can be used to control circuits and small robots. 
                  </div> <br/>
                  <div style={{width: "50%"}}>It can be programmed using C language or assembler language.</div>
                  <div style={{position: "absolute", right: "0px", bottom: "0px", width: "200px", height: "100px", backgroundColor: "#5C2CB4", opacity: "0.9", borderRadius: "200px 200px 0px 0px" }}></div>
                  <div className={"picimage"}></div>
                </div>

                <div style={{width: "200px", height: "230px", position: "relative"}}>
                  <div className={"dialog"}>
                    <div style={{paddingLeft: "10px"}}>
                      <br/>
                      <div>keep scrolling</div>
                      <div>there's more!!</div>
                    </div>
                  </div>
                  <img style={{position: "absolute", width: "200px", bottom: "0px"}} src={robot} alt=""/>
                  <div style={{position: "absolute"}}><Cube start={plc}/></div> 
                  <img className={plc ? "armleftan" : "armleft"} src={armright} alt=""/>
                  <img className={plc ? "armrightan" : "armright"} src={armleft} alt=""/>
                </div>

                <div className={"languageC"}>

                </div>
              </div>

            </div>
          </div>
          </div>
         
        </Slide>

        <Slide>
        <div className={"verticalcenter"} >
          <div className={"boxplc"} >
          

            <div style={{position: "relative", width: "1000px", height: "500px"}}>


            
            
              <div className={"gcodeimage"}></div>

              <div className={"paragraphsmall"} style={{marginLeft: "300px"}}>
                <h3>CNC programming</h3>
                <div>Numerical Control Machines (CNC) are used to fabricate parts. These machines remove layers of material until the piece acquires the desired shape. </div>
                <br/>
                <div>These machines are programmed using G code.</div>
              </div>

              <div style={{position: "absolute", width: "334px", height: "278px", left: "300px", bottom: "0px"}}>
                <div className={"tool2"}></div>
                <img style={{position: "absolute", width: "334px"}} src={cube} alt=""/>
          
                <div className={cnc ? "mycubean" : "mycube"}></div>
                <div className={cnc ? "mycube2an" : "mycube2"}></div>
                <div className={cnc ? "toolan" : "tool"}></div>
  
              </div>

              <div style={{position: "absolute", right: "0px", bottom: "0px", width: "250px", height: "250px", backgroundColor: "#5C2CB4", opacity: 0.9, borderRadius: "250px 0px 0px 0px" }}></div>
              <div className={"cncdrawing"}></div>

            </div>
            
          </div>
          </div>
        </Slide>

        <Slide>
        <div className={"verticalcenter"} >
        <div className={"boxplc"}>
          <div style={{position: "relative", width: "1000px", height: "500px"}}>

            <div className={"paragraphsmall"} style={{marginLeft: "400px"}}>
              <h3>Robotics programming</h3>
              <div>The robotic arms are used mainly for the manipulation of pieces and in assembly lines. </div>
              <br/>
              <div>They are programmed using the KAREL programming language by using a Teach Pendant.</div>

            </div>

            <div style={{marginLeft: "400px"}} className={"space"}>
              <div className={"codekarel"}></div>

            </div>

            <div style={{width: "100%", position: "absolute", top: "0px"}}>
              <img style={{position: "absolute", top: "20px", left: "30px", width: "250px"}} src={armbase} alt=""/>
              <div className={android ? "armmiddlean" : "armmiddle"} >
              <img style={{position: "absolute", top: "20px", left: "90px", width: "70px"}} src={armarm} alt=""/>
              <img className={android ? "armendan" : "armend"} src={armfinal} alt=""/>
              </div>
            </div>

            

            <div style={{position: "absolute", left: "0px", bottom: "0px", width: "250px", height: "250px", backgroundColor: "#5C2CB4", opacity: 0.9, borderRadius: "0px 250px 0px 0px" }}></div>
            <div className={"teach"}></div>

            

          </div>
        </div>
        </div>
        </Slide>

        

      </FullPage></div>
    );
  
}

ReactDOM.render(<FullPageExample />, document.getElementById("root"));