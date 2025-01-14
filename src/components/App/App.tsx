import { Outlet } from 'react-router-dom';

import * as Styled from './App.styled';
import Header from '../Header/Header';

const App = () => {
  return (
    <Styled.App>
      <Header />
      <Outlet />
    </Styled.App>
  );
};

export default App;
