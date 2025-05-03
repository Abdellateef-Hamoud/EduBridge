import React from 'react'


function Card({ title, bgColor, color, description, img }) {
    return (
        <div className='card'>
            <span className="icon" style={{ color: color, backgroundColor: bgColor }}>{img}</span>
            <h2>{title}</h2>
            <div className="line"></div>
        <p>{description}</p>

        </div>
    )
}
export default Card;
