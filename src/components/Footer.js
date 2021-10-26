import React from 'react'
import './Footer.css'
import { useInView } from 'react-intersection-observer';


const Footer = () => {

    const { ref, inView, } = useInView({
        /* Optional options */
        threshold: 0.4,
      });
    return (
        <div className={inView ? "footer slider--zoom" : "footer" } ref={ref}>
            <h1>Travel</h1>
            <p>Travel trip</p>
        </div>
    )
}

export default Footer
