import React from 'react'
import DATSET from "../../dataset/routesData"
import { ROUTES_COUNT_FOR_PAGE } from '../../utils/utils'

const Pagination = ({currentPage, changePage}) => {
  return (
    <div className='pagination-container'>
        <div className="pagination-pages">
            {currentPage+1} - {currentPage * ROUTES_COUNT_FOR_PAGE} of {DATSET.length} items
        </div>
        <div className="">
        
        </div>
    </div>
  )
}

export default Pagination