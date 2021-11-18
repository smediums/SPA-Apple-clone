import React from 'react'

function StoreRibbon({ slide1, slide2, slide3 }) {
    return (
        <div>
            <div className="slider">
                <div className="slide">{slide1}</div>
                <div className="slide">{slide2}</div>
                <div className="slide">{slide3}</div>
            </div>
            <button className="sliderBtn"></button>
            <button className="sliderBtn"></button>
        </div>
    )
}

export default StoreRibbon
