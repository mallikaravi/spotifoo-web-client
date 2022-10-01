import React from 'react'

export const Pagination = ({songsPerPage, totalSongs, paginate}:any) => {
    const pageNumers = [];
    if(totalSongs < songsPerPage){
        return null
    }
    for (let index = 1; index <= Math.ceil(totalSongs / songsPerPage); index++) {
        pageNumers.push(index);
    }
    return (<nav>
        <ul className='pagination'>
            {pageNumers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='!#' className='page-link'>{number}</a>
                </li>
            ))}
        </ul>
    </nav>)
}