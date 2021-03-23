import * as React from 'react';
import {RootNavigator} from 'navigation';
import {ThemeProvider} from 'ui';
import {AuthProvider} from 'core';
import APIProvider from 'api/APIProvider';

export const App = () => {
  return (
    <APIProvider>
      <AuthProvider>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </AuthProvider>
    </APIProvider>
  );
};
