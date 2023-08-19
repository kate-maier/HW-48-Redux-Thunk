import { Provider } from 'react-redux';
import store from './components/redux/store';
import DataComponent from './components/DataComponent'

function App() {
  return (
    <Provider store={store}>
        <DataComponent />
    </Provider>
  );
}

export default App;
