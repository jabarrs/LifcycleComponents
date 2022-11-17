import { Home } from '../../pages/home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
