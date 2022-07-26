
import { useState } from 'react';

import { Container, ContentContainer } from '../styles';
import Menu from "../components/Menu"
import List from '../components/List';
import About from '../components/About';

const AppContainer = () => {
  const [values, setValues] = useState({
    selectedMenuItem: ['about']
  });

  return (
    <Container>
      <Menu {...values} setValues={setValues} />
      <ContentContainer>
        {
          values.selectedMenuItem.includes('about') ? 
          <About />
          :
          <List />
        }
      </ContentContainer>
    </Container>
  );
}

export default AppContainer;
