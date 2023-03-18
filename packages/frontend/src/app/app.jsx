import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Traffic from "./pages/traffic/Traffic";

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
