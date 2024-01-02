import './App.css';
import { Dropdown, initTE, Ripple } from "tw-elements";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from './pages/pagesPublic/PublicRouter';
import PrivateRouter from './pages/pagesPrivee/PrivateRouter';
import Gardien from '@/_helpers/Gardien';
initTE({ Dropdown, Ripple });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />}/>
        <Route path="/ships/*" element={<Gardien><PrivateRouter /></Gardien>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
