import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/Theme';
import Header from './ui/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route path="/services" component={() => <div>Services</div>} />
          <Route
            path="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route path="/about" component={() => <div>About us</div>} />
          <Route path="/contact" component={() => <div>Contact us</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
