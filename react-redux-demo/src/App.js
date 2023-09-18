
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import store from './redux/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer></CakeContainer>
     <HookCakeContainer></HookCakeContainer>
    </div>
    </Provider>
  );
}

export default App;
