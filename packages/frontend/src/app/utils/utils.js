import DATASET from "../dataset/routesData"

export const ROUTES_COUNT_FOR_PAGE = 4;
export const findeByRouteIndex = (index)=> DATASET.map((route)=>route.ID === index)
export const getPagesRoutes = (page, dataset)=>[...dataset].splice(page * ROUTES_COUNT_FOR_PAGE,  (page+1) * ROUTES_COUNT_FOR_PAGE > dataset.length ? dataset.length: (page+1) * ROUTES_COUNT_FOR_PAGE)
export const isPaginationDisabled = (page)=> DATASET.length - (page * ROUTES_COUNT_FOR_PAGE) < 0
export const getPagesCount = ()=> Math.ceil(DATASET/(page + 1))