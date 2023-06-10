import React, { Component } from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
// redux-persist
import { PersistGate } from 'redux-persist/es/integration/react';
const { persistor, store } = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
    );
  }
}
export default App;