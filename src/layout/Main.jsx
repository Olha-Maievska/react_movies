import React from 'react'
import CardsList from '../components/CardList'
import { Search } from '../components/Search'
import Preloader from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      loading: true,
    }
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cards: data.Search, loading: false })
      })
      .catch((e) => {
        console.error(e)
        this.setState({ loading: false })
      })
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true })
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ cards: data.Search, loading: false }))
      .catch((e) => {
        console.error(e)
        this.setState({ loading: false })
      })
  }

  render() {
    const { cards, loading } = this.state
    return (
      <main className="container content">
        <h2 className="cardTitle">Movies</h2>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <CardsList cards={cards} />}
      </main>
    )
  }
}

export default Main
