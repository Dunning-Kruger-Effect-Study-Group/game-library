// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Base } from './features/ui/base';
import { Provider } from 'react-redux';
import store from './redux/store';

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
            {/* <Route path="Hobby" element={<Hobby />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
