import React from 'react'
import Card from './Card'

function CardsList(props) {
  const { cards = [] } = props
  return (
    <ul className="cards">
      {cards.length ? (
        cards.map(({ imdbID, Poster, Title, Year, Type }) => (
          <Card
            key={imdbID}
            src={Poster}
            title={Title}
            year={Year}
            type={Type}
          />
        ))
      ) : (
        <h4>Nothing found</h4>
      )}
    </ul>
  )
}

export default CardsList
