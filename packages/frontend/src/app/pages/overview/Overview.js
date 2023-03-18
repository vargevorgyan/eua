import React from 'react'
import "./overview.css"
import routesData from '../../dataset/routesData';
import { Bar } from './Bar';

const Overwiew = () => {
  return (
    <div className='overview'>
        <div className='over-top'>
            <div className='over-cal'>
                <p className='title'>Overview</p>
                <input type="text" className='over-btns' placeholder='Start address' />
                <input type="text" className='over-btns' placeholder='End address' />
                <input type="button" value="Calculate" className='over-cal-btn' />
            </div>

            <div className='over-body'>
                <div className='over-box'>
                    <p className='over-box-title'>Average of workload index</p>
                    <p className='over-box-number'>
                        {
                            routesData.reduce((acc,item) => acc += item.Workload_index,0) / routesData.length
                        }
                    </p>
                </div>
                <div className='over-box'>
                    <p className='over-box-title'>Average of usage index</p>
                    <p className='over-box-number'>
                        {
                            routesData.reduce((acc,item) => acc += item.Usage_index,0) / routesData.length
                        }
                    </p>
                </div>
                <div className='over-box'>
                    <p className='over-box-title'>Busy hours</p>
                    <p className='over-box-number'> <span className='timeTo'>From</span> 10PM <span className='timeTo'>- To</span> 1PM</p>
                </div>
            </div>
        </div>
        <div className='over-bottom'>
           <Bar />
        </div>
    </div>
  )
}

export default Overwiew
