import React from 'react'
import { ROUTES_COUNT_FOR_PAGE } from '../../utils/utils'
import Arrow from "../../icons/arrow.png"

const Pagination = ({currentPage, setCurrentPage,data}) => {
    const lastRouteIndex =  (currentPage+1) * ROUTES_COUNT_FOR_PAGE > data.length ? data.length: (currentPage+1) * ROUTES_COUNT_FOR_PAGE
    return (
        <div className='pagination-container'>
            <div className="pagination-pages">
                {currentPage*ROUTES_COUNT_FOR_PAGE} - {lastRouteIndex } of {data.length} items
            </div>
            <div className="pagination-itmems-container">
                <button >
                    <img src={Arrow} alt="" />
                </button>
                        {Array(Math.ceil(data.length / ROUTES_COUNT_FOR_PAGE)).fill((_,i)=>i).map((_,i)=>
                            <button onClick={()=>setCurrentPage(i)} key={i}>
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