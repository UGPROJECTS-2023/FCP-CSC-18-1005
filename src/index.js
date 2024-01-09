import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
