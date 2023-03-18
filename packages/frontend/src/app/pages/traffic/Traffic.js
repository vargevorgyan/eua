import React from 'react'
import "./traffic.css";
import filterIcon from "../../icons/filter.png"
import arrow from "../../icons/arrow.png"
import Pagination from './Pagination';


const Traffic = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <div className='traffic-top'>
      <p className='routes-text'>Routes list</p>
      <div className='filter'>
          <img src={filterIcon} alt="" />
              <p className='filter-text'>Filter</p>
          <img src={arrow} alt="" />
      </div>
    </div>
    <div className='traffic-table'></div>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default Traffic
