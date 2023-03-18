const dataset = []
const ROUTES_COUNT_FOR_PAGE = 4;
export const findeByRouteIndex = (index)=> dataset.map((route)=>route.ID === index)
export const getPagesRoutes = (page)=>dataset.splice(page * ROUTES_COUNT_FOR_PAGE, ROUTES_COUNT_FOR_PAGE * (page+1))
export const isPaginationDisabled = (page)=> dataset.length - (page * ROUTES_COUNT_FOR_PAGE) < 0