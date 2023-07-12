import React, {FC, memo} from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {store} from './store/store';
import Router from './screens/Router';

const App: FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Router />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default memo(App);
