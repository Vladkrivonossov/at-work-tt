import { Provider } from 'react-redux';
import { MainPage } from '../pages/MainPage/ui/MainPage';
import { EditPage } from '../pages/EditPage/ui/EditPage';
import { Layout } from '../widgets/Layout/iu/Layout';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/edit/:userId' element={<EditPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
