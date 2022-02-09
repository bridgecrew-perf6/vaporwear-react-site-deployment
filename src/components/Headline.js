import React, { useEffect, useState } from "react";
import "./Headline.css";

function Headline() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        });
        
        let opacity = 0;
        const opacityAnimation = () => {
            opacity += 0.02;
            if (opacity > 1) {
                setOpacity(1);
            } else {
                setOpacity(opacity);
                requestAnimationFrame(opacityAnimation);
            }
        };
        setTimeout(() => {
            setTimeout(opacityAnimation, 1000)
        }, 1000);
    }, []);


    return <>
        <div className="headlineContainer" style={{ width: width, height: height }}>
            <div className="headlineText" style={{opacity: opacity }}>
                <h1 className="headlineTitle" style={{paddingTop: (height / 3), color: "#AAAAAACC" }}>VAPORWEAR</h1>
                <h3 style={{ color: "#AAAAAAFF" }}>A SMART WATCH YOU CAN ONLY DREAM OF</h3>
                <h3 style={{ color: "#AAAAAAFF" }}>Precision luxury timepiece mastercrafted by people who have been to Switzerland.</h3>
            </div>
        </div>
    </>;
}

export default Headline;
