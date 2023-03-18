export const ROUTES_COUNT_FOR_PAGE = 4;
export const getPagesRoutes = (page, dataset)=>[...dataset].slice(page, page + ROUTES_COUNT_FOR_PAGE);