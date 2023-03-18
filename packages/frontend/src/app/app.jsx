import { Routes, Route } from "react-router-dom";
import Layout from "./davo/Layout/Layout";

export function App() {

  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index />
          <RoutesList />
        </Route>
      </Routes>
     </>
  );
}

export default App;
