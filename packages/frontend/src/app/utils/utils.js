import DATASET from "../dataset/routesData"

export const ROUTES_COUNT_FOR_PAGE = 4;
export const findeByRouteIndex = (index)=> DATASET.map((route)=>route.ID === index)
export const getPagesRoutes = (page)=>[...DATASET].splice(page * ROUTES_COUNT_FOR_PAGE, ROUTES_COUNT_FOR_PAGE * (page+1))
export const isPaginationDisabled = (page)=> DATASET.length - (page * ROUTES_COUNT_FOR_PAGE) < 0
export const getPagesCount = ()=> Math.ceil(DATASET/(page + 1))