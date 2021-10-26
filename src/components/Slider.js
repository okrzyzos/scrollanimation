import React from 'react'
import './Slider.css'
import { useInView } from 'react-intersection-observer';
import Slide from 'react-reveal/Slide'

const Slider = ({ imageSrc, title, subtitle, flipped }) => {


    const { ref, inView, } = useInView({
        /* Optional options */
        threshold: 0.4,
      });

    const renderContent = () => {
        if (!flipped) {
            return (

                <>
                    <img src={imageSrc} alt="travel" className="slider_image" />
                  <div className="sliderContent">
                        <h1 className="slider_title">{title} </h1>
                        <p>{subtitle}</p>
                    </div>

                    
                </>

            );
        } else {
            return (
                <>
                <div className="sliderContent">
                        <h1 className="slider_title">{title} </h1>
                        <p>{subtitle}</p>
                        
                    </div>
                   <img src={imageSrc} alt="travel" className="slider_image" />



                </>
            );
        }
    }
    return (
        <div className={inView ? "slider slider--zoom" : "slider" } ref={ref}>{renderContent()}</div>
        
    )
}

export default Slider
