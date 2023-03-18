import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Csv from "./pages/csv/Csv";
import Overwiew from "./pages/overview/Overview";
import Traffic from "./pages/traffic/Traffic";

export function App() {

  
  return (
  
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Traffic />}/>
          <Route path="overview" element={<Overwiew />} />
          <Route path="csv" element ={<Csv />} />
        </Route>
      </Routes>
  
  );
}

export default App;
