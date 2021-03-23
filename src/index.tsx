import * as React from 'react';
import {RootNavigator} from 'navigation';
import {ThemeProvider} from 'ui';
import {AuthProvider} from 'core';

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </AuthProvider>
  );
};
