import React from 'react';

import { Container, Wrapper } from './styles';
import Main from '../Main';
import Header from '../../components/Header';
// import MenuBar from '../MenuBar';
// import SideBar from '../SideBar'

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        {/* <MenuBar /> */}
        {/* <Main /> */}
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
}

export default Layout;