import './styles/GlobalStyles.css'; // Ensure this is linked
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Import the store configured in store/index.ts
import App from './App';

// Render the app with the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
