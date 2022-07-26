
import { useState } from 'react';

import { Container, ContentContainer } from '../styles';
import Menu from "../components/Menu"
import List from '../components/List';
import About from '../components/About';

const AppContainer = () => {
  const [values, setValues] = useState({
    selectedMenuItem: ['about'],
    playersList: [],
    columnToBeFiltered: 'last_name',
    isSortingApplied: false,
    filterKeyword: ''
  });

  return (
    <Container>
      <Menu values={values} setValues={setValues} />
      <ContentContainer>
        {
          values.selectedMenuItem.includes('about') ? 
          <About />
          :
          <List setValues={setValues} values={values} />
        }
      </ContentContainer>
    </Container>
  );
}

export default AppContainer;
