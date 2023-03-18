import React,{useState,useEffect} from 'react'
import "./traffic.css";
import filterIcon from "../../icons/filter.png"
import searchIcon from "../../icons/search.png"
import arrow from "../../icons/arrow.png"
import Pagination from './Pagination';
import DATASET from "../../dataset/routesData"
import { getPagesRoutes } from '../../utils/utils';
import useDebounce from '../../hooks/useDebouce';

const Traffic = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataset, setDataset] = useState(DATASET)
  const [routes, setRoutes] = useState(getPagesRoutes(currentPage,dataset))
  const [value, setValue] = useState('') 
  const debouncedValue = useDebounce(value, 1000)

  const search = (e)=>{
    const {value} = e.target
    setValue(value)
  }
  
  useEffect(() => {
    const filteredValues = dataset.filter((route)=>route.Route_ID.toString().startsWith(debouncedValue))
    setCurrentPage(0)
    setDataset(filteredValues)  
  }, [debouncedValue])

  useEffect(() => {
    setRoutes(getPagesRoutes(currentPage, dataset))
  }, [dataset, currentPage])
  
  
  
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
          <img src={searchIcon} alt="" />
          <input className='search-input' name='search' type="text" placeholder='Search by route ID' onChange={search} value={value} />
        </div>
      </div>
      <table>
        <thead>

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
        </thead>
        <tbody>
        {
          routes.map((route, i)=>
          <tr key={route.Route_ID}>
            <td>{i+1}</td>
            <td>{route.Route_ID}</td>
            <td>{route.Start_Address}</td>
            <td>{route.End_address}</td>
            <td>{route.Workload_index}</td>
            <td>{route.Usage_index}</td>
            <td>{route.Start_date}</td>
            <td>{route.End_date}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} data={dataset}/>
    </>
  )
}

export default Traffic
