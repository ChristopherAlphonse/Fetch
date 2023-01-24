import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import PageNotFound from './PageNotFound ';

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/Register" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
