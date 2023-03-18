import React from 'react'
import "./traffic.css";
import filterNshan from "../../../icons/filter.png";
import filterSlaq from "../../../icons/filterSlaq.png";


const Traffic = () => {
  return (
    <div className='traffic-top'>
        <p className='routes-text'>Routes list</p>
        <div className='filter'>
            <img src={filterNshan} alt="" />
                <p className='filter-text'>Filter</p>
            <img src={filterSlaq} alt="" />
        </div>
    </div>
  )
}

export default Traffic
