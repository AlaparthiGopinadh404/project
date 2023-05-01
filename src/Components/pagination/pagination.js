import React, { useEffect } from 'react';
// import style from "../pagination/style.css";
// import style from "./pagination/style.css";
import './style.css';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    console.log('currentPage !== 1', nPages);
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)


    const prevcurrentPage = currentPage - 1;
    const nextcurrentPage = currentPage + 1;
    const firstpage = 1;
    const lastpage = nPages;
    console.log('previouspage', prevcurrentPage);
    console.log('nextpage', nextcurrentPage);
    console.log('currentpage', currentPage);
    console.log('lastpage', lastpage);
    console.log('firstpage', firstpage);

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    useEffect(() => {

    }, [currentPage])
    return (
        <nav>
            {nPages > 1 &&
                <ul className='pagination justify-content-center'>
                    {currentPage !== 1 &&
                        <li className="page-item ">
                            <a className="page-link"
                                onClick={prevPage}
                                href={() => false}>
                                <span aria-hidden="true" className='arrow'>&laquo;</span>

                                {/* <i class='mdi mdi-arrow-left' style={{ fontSize: "21px" }}></i> */}
                            </a>
                        </li>
                    }
                    {pageNumbers.map(pgNumber => (

                        <li key={pgNumber}
                            className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                            {pgNumber <= firstpage &&
                                <a onClick={() => setCurrentPage(pgNumber)}
                                    className='page-link'
                                    href={() => false} style={{ fontSize: "21px" }}>


                                    {pgNumber}
                                </a>
                            }
                        </li>
                    ))}
                    {pageNumbers.map(pgNumber => (
                        <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}>
                            {pgNumber === firstpage + 1 && pgNumber < prevcurrentPage && pgNumber < currentPage &&
                                <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} style={{ fontSize: "21px" }}>
                                    ...
                                </a>
                            }
                        </li>
                    ))}
                    {pageNumbers.map((pgNumber) => (
                        <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                            {pgNumber > firstpage && pgNumber === currentPage - 1 && pgNumber < lastpage &&
                                <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                    {pgNumber}
                                </a>
                            }
                        </li>
                    ))}
                    {pageNumbers.map((pgNumber) => (
                        <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                            {pgNumber > firstpage && pgNumber === currentPage && pgNumber < lastpage &&
                                <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                    {pgNumber}
                                </a>
                            }
                        </li>
                    ))}
                    {pageNumbers.map((pgNumber) => (
                        <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                            {pgNumber > firstpage && pgNumber === currentPage + 1 && pgNumber < lastpage &&
                                <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                    {pgNumber}
                                </a>
                            }
                        </li>
                    ))}
                    {pageNumbers.map((pgNumber) => (
                        <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                            {pgNumber === lastpage - 2 && pgNumber > prevcurrentPage && pgNumber > currentPage &&
                                <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                    ...
                                </a>
                            }
                        </li>
                    ))}
                    {pageNumbers.map(pgNumber => (
                        <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                            {lastpage <= pgNumber &&
                                <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                    {pgNumber}
                                </a>
                            }
                        </li>
                    ))}
                    {nPages !== currentPage &&
                        <li className="page-item ">
                            <a className="page-link"
                                onClick={nextPage}
                                href={() => false}>
                                <span aria-hidden="true">&raquo;</span>

                                {/* <i class='mdi mdi-arrow-right' style={{ fontSize: "21px" }}></i> */}
                            </a>
                        </li>
                    }
                </ul>
            }
        </nav>
    )
}

export default Pagination;