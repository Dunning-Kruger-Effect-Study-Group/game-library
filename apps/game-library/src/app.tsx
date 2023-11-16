// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Base } from './features/ui/base';
import { Games } from './pages/games';
import Companies from './pages/companies';
import Platforms from './pages/platforms';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index path='/games' element={<Games />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/companies" element={<Companies />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
