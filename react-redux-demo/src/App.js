
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import store from './redux/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer></CakeContainer>
     <HookCakeContainer></HookCakeContainer>
     <IcecreamContainer></IcecreamContainer>
     <NewCakeContainer></NewCakeContainer>
    </div>
    </Provider>
  );
}

export default App;
