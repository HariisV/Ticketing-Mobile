import React from 'react';
import MainStackNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persiststor, store} from './src/stores/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}
export default App;
