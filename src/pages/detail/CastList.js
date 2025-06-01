import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';


const CastList = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    return (
        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" ></div>
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;
