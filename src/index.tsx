import * as React from 'react';
import {Home} from 'screens';
import {ThemeProvider} from 'ui';

export const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};
