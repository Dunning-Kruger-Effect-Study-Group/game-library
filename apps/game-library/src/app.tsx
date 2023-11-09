// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Base } from './features/ui/base';
import { Games } from './pages/games';
import Companies from './pages/companies';
import Platforms from './pages/platforms';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index path='/games' element={<Games />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/companies" element={<Companies />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
