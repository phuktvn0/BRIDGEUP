import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {

    const { category } = useParams();

    let title;

    switch (category) {
        case 'learncap':
            title = 'LearnCap – Học để trưởng thành';
            break;
        case 'growcap':
            title = 'GrowCap – Tinh thần phát triển bền vững';
            break;
        case 'livecap':
            title = 'LiveCap – Cảm xúc & câu chuyện trưởng thành';
            break;
        default:
            title = 'Không xác định';
            break;
    }


    return (
        <>
            <PageHeader>
                {title}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category} />
                </div>
            </div>
        </>
    );
}

export default Catalog;
