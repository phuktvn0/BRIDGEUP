import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

const MovieCard = props => {

    const item  = props.item;

    return (
        <Link to={''}>
            <h3>{item.title || item.name}</h3>
            <div className="movie-card">
                <Button>
                    <i className="bx bx-pencil"></i>
                </Button>
            </div>
        </Link>
    );
}

export default MovieCard;
