import React from 'react'
import css  from './RoutesList.module.css'
import FilterIcon from "../../../../icons/Filter"
import ArrowDownIcon from "../../../../icons/ArrowDown"

const RoutesList = () => {
  return (
    <div className={css["container"]}>
        <main className={css["main"]}>
            <div className={css["titleAndFilter"]}>
                <h1 className={css["title"]}>
                    Routes list
                </h1>
                <button className={css["filter"]}>
                   <FilterIcon/> Filter <ArrowDownIcon /> 
                </button>
            </div>
        </main>
    </div>
  )
}

export default RoutesList