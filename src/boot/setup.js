import React from 'react';
import { Root, StyleProvider } from 'native-base';
import store from '../store';
import { Provider } from 'react-redux';
import getTheme from '../theme/components';
import variables from '../theme/variables/commonColor';
import App from '../App';

export default function() {
  return (
    <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme(variables)}>
              <App />
          </StyleProvider>
        </Root>
    </Provider>
  );
};