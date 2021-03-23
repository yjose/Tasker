import * as React from 'react';
import {Login} from 'screens';
import {ThemeProvider} from 'ui';

export const App = () => {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
};
