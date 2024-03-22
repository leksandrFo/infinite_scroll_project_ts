import { Provider } from 'react-redux';
import { store } from '../shared/store/store.ts';
import Router from './router/index.tsx';

function App() {
  
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
