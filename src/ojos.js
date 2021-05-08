import { useState } from "react"
import React, {useRef, useEffect} from 'react'

const Ojos = (props) => {

    const canvasRef = useRef(null)
    let horizontal
    let vertical
    let angle
    let coordinateX
    let coordinateY
    let posX
    let posY
    let arco=3
    let raf

    useEffect(() => {
    
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.canvas.width=100;
        ctx.canvas.height=100;
        let Xaxis=window.innerWidth/2;
        let Yaxis=450

        const draw = () => {
          
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
          ctx.fillStyle = '#000000'
          ctx.beginPath()
          ctx.arc(coordinateX-10, coordinateY, 5, 0, 2*Math.PI)
          ctx.fill()
          ctx.beginPath()
          ctx.arc(coordinateX+15, coordinateY, 5, 0, 2*Math.PI)
          ctx.fill()
        }
        //Our draw came here
       const drawing = () => {

            
          if ((vertical>Yaxis)&&(horizontal>Xaxis)) {
            posX=horizontal
            posY=vertical
            posY=posY-Yaxis
            posX=posX-Xaxis
            angle=(Math.atan2(posY,posX))
            coordinateX=(arco*Math.cos(angle))+(ctx.canvas.width/2)
            coordinateY=(arco*Math.sin(angle))+(ctx.canvas.height/2)
           
          }
          if ((vertical<Yaxis)&&(horizontal>Xaxis)) {
            posX=horizontal
            posY=vertical
            posY=Yaxis-posY
            posX=posX-Xaxis
            angle=(Math.atan2(posY,posX))
            coordinateX=(arco*Math.cos(angle))+(ctx.canvas.width/2)
            coordinateY=(ctx.canvas.height/2)-(arco*Math.sin(angle))
            
          }
          if ((vertical>Yaxis)&&(horizontal<Xaxis)) {
            posX=horizontal
            posY=vertical
            posY=posY-Yaxis
            posX=Xaxis-posX
            angle=(Math.atan2(posY,posX))
            coordinateX=(ctx.canvas.width/2)-(arco*Math.cos(angle))
            coordinateY=(arco*Math.sin(angle))+(ctx.canvas.height/2)
          
          }

          if ((vertical<Yaxis)&&(horizontal<Xaxis)) {
            posX=horizontal
            posY=vertical
            posY=Yaxis-posY
            posX=Xaxis-posX
            angle=(Math.atan2(posY,posX))
            coordinateX=(ctx.canvas.width/2)-(arco*Math.cos(angle))
            coordinateY=(ctx.canvas.height/2)-(arco*Math.sin(angle))
          }
          raf = window.requestAnimationFrame(drawing);
          draw()
        } 

       drawing()
      }, [])

      

    useEffect(() => {
        window.addEventListener('mousemove', function(e) {
        horizontal = e.clientX;
        vertical= e.clientY; 

      })
    }, []); 
  

    return (
        <div>
            <canvas  ref={canvasRef} {...props}/>
        </div>
    )

}

export default Ojos;