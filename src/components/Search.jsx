import React from 'react'

export class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type)
      }
    )
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            value={this.state.search}
            type="search"
            className="validate"
            placeholder="Search"
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Send
          </button>
          <div className="search-radio">
            <label>
              <input
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Serials only</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}
