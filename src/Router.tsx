import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import DashboardPage from 'pages/DashboardPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
