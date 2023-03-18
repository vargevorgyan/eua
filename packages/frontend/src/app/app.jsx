import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Overwiew from "./pages/overview/Overview";
import Traffic from "./pages/traffic/Traffic";

export function App() {

  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Traffic />}/>
          <Route path="overview" element={<Overwiew />} />
        </Route>
      </Routes>
     </>
  );
}

export default App;
