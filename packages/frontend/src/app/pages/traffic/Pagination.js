import React from 'react'
import DATSET from "../../dataset/routesData"
import { ROUTES_COUNT_FOR_PAGE } from '../../utils/utils'
import Arrow from "../../icons/arrow.png"

const Pagination = ({currentPage, setCurrentPage}) => {
    console.log(DATSET.length , ROUTES_COUNT_FOR_PAGE)
    const lastRouteIndex =  (currentPage+1) * ROUTES_COUNT_FOR_PAGE > DATSET.length ? DATSET.length: (currentPage+1) * ROUTES_COUNT_FOR_PAGE
    return (
        <div className='pagination-container'>
            <div className="pagination-pages">
                {currentPage*ROUTES_COUNT_FOR_PAGE} - {lastRouteIndex } of {DATSET.length} items
            </div>
            <div className="pagination-itmems-container">
                <button>
                    <img src={Arrow} alt="" />
                </button>
                        {Array(Math.ceil(DATSET.length / ROUTES_COUNT_FOR_PAGE)).fill((_,i)=>i).map((_,i)=>
                            <button onClick={()=>setCurrentPage(i)}>
                                {i+1}
                            </button>
                        )}
                <button>
                    <img src={Arrow} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Pagination