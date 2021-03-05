import React, {Component} from 'react';

const BookList = (props) => {
    const {books, add} = props;

    return (
        <div className="book-shelf">
            {books.map((e, i, arr) => {
                return (
                    <div className="books">
                    <img onClick={() => add(e.title, i)} src={e.img}/>
                    <p>{e.title}</p>
                    <p>by {e.author}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default BookList;
