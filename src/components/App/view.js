import React from 'react';
import styled from 'styled-components';
import { Media } from 'styled-components-toolbox';
import { Switch, Route } from 'react-router-dom';

import Aside from 'components/Aside';
import Main from 'screen/Main';
import Element from 'screen/Element';
import Properties from 'screen/Properties';
import Elements from 'screen/Elements';
import Property from 'screen/Property';
import { ELEMENTS, HOME, PROPERTIES } from 'common/routes';

const App = () => (
  <>
    <Aside />
    <Article>
      <Switch>
        <Route component={Main} exact path={HOME} />
        <Route component={Elements} exact path={ELEMENTS} />
        <Route component={Element} path={`${ELEMENTS}/:id`} />
        <Route component={Properties} exact path={PROPERTIES} />
        <Route component={Property} exact path={`${PROPERTIES}/:property`} />
      </Switch>
    </Article>
  </>
);

export default App;

const Article = styled.article`
  position: fixed;
  top: 0;
  left: 40px;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.textColor};
  ${Media.responsive`
    padding: 10px;
    left: 0;
    bottom: 50px;
  `}
`;