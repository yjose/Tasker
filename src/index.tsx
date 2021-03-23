import * as React from 'react';
import {RootNavigator} from 'navigation';
import {ThemeProvider} from 'ui';

export const App = () => {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
};
