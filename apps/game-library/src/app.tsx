// eslint-disable-next-line @typescript-eslint/no-unused-vars
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Base } from './features/ui/base';
import { Provider } from 'react-redux';
import store from './redux/store';
=======
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Base } from './features/ui/base';
import { Games } from './pages/games';
import Companies from './pages/companies';
import Platforms from './pages/platforms';
>>>>>>> 99ec0eb77ecc4bd0e2e6446d9a1fcbc16f79e59c

export function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
            {/* <Route path="Hobby" element={<Hobby />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Provider>
=======
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index path='/games' element={<Games />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/companies" element={<Companies />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
>>>>>>> 99ec0eb77ecc4bd0e2e6446d9a1fcbc16f79e59c
    </BrowserRouter>
  );
}

export default App;
