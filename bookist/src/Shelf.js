import React, { Component} from 'react';

const Shelf = (props) => {
    const {shelf, clear} = props;
    return (
        <div>
            <h1 className="your-shelf">Your Shelf</h1>
            <button onClick={() => clear()}>clear shelf</button>
            {shelf.map((e) => {
                return(
                    <p>{e}</p>
                )
            })}
        </div>
    )



}
export default Shelf;
