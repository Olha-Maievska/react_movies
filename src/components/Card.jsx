import React from 'react'

const Card = ({ src, title, year, type }) => {
  return (
    <li className="card teal lighten-5">
      <div className="card-image waves-effect waves-block waves-light">
        {src === 'N/A' ? (
          <img
            className="cardImg activator"
            src={`https://via.placeholder.com/300x400?text=${title}`}
            alt=""
          />
        ) : (
          <img className="cardImg activator" src={src} alt="" />
        )}
      </div>
      <div className="card-content center-align">
        <h2 className="card-title activator teal-text darken-4">{title}</h2>
        <div className="row">
          <div className="col s6">Year: {year}</div>
          <div className="col s6">Type: {type}</div>
        </div>
      </div>
    </li>
  )
}

export default Card
