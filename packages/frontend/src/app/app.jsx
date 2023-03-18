import { Routes, Route } from "react-router-dom";
import Layout from "./davo/Layout/Layout";
import Traffic from "./davo/pages/traffic/Traffic";

export function App() {

  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Traffic />}/>
        </Route>
      </Routes>
     </>
  );
}

export default App;
