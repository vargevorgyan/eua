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
    <div className='traffic-table'>
      <div className='traffic-search'>
        <div className='search'>
          <img src={search} alt="" />
          <input className='search-input' name='search' type="text" placeholder='Search by route ID' />
        </div>
      </div>
      <table>
        <tr className='first-tr' key="">
          <th></th>
          <th>Route ID</th>
          <th>Start address</th>
          <th>End address</th>
          <th>Workload index</th>
          <th>Usage index</th>
          <th>Start date</th>
          <th>End date</th>
        </tr>
        <tr key="">
          <td>1</td>
          <td>8074567876543</td>
          <td>Ney York City, 5th avenue, sq....</td>
          <td>This status inform</td>
          <td>12</td>
          <td>23</td>
          <td>13 May 2022 - 11:20</td>
          <td>13 May 2022 - 11:23</td>
        </tr>
      </table>
    </div>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default Traffic
