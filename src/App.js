import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import List from "./tour/List";
import Create from "./tour/Create";
import Update from "./tour/Update";
import Details from "./tour/Details";
import Delete from "./tour/Delete";

function App() {
  return (
      <>
        <Routes>
          <Route >
            <Route path={'/'} element={<List/>}></Route>
            <Route path={'/create'} element={<Create/>}></Route>
            <Route path={'/update/:id'} element={<Update/>}></Route>
            <Route path={'/details/:id'} element={<Details/>}></Route>
            <Route path={'/delete/:id'} element={<Delete/>}></Route>
          </Route>
        </Routes>
      </>
  );
}

export default App;
