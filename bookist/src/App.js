import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import data from './data.js';
import SearchBar from './SearchBar';
import Shelf from './Shelf';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (title, i) => {
        this.setState({shelf: [...this.state.shelf, title]})
        let dataNew = this.state.books.slice();
        dataNew.splice(i, 1)
        this.setState({books: dataNew})
      }
  clearShelf = () =>{
    this.setState({shelf: []})
    this.setState({books: data})
  }
  filterBooks = (input) =>{
    let filteredBooks = this.state.books.filter((e) => {
      if(e.title.toLowerCase().includes(input) || e.author.toLowerCase().includes(input)){
        return e
      }
    })
    console.log(filteredBooks)
    this.setState({books: filteredBooks})
  }
  reset = () =>{
    this.setState({books: data})
  }



  render(){
    console.log(this.state.books)
    console.log(this.state.shelf)

    return (
      <div className="App">
        <header><h1>bookist</h1></header>
        <SearchBar filter={this.filterBooks} reset={this.reset}/>
        <div className='main-container'>
          <div className="book-container">
          <BookList add={this.addToShelf} books={this.state. books}/>
          </div>
          <div className="black-line"></div>
          <div className="shelf">
          <Shelf clear={this.clearShelf} shelf={this.state.shelf}/>
          </div>
        </div>

      </div>
    )
  }
}
