import React from 'react';
import './card.styles.css';

export const Card = (props)=> {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${ props.monst.id }?set=set2&size=180x180`} />
            <h2>{ props.monst.name }</h2>
            <p>{ props.monst.email }</p>
        </div>
    );
};