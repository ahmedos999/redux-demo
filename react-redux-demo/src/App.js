
import './App.css';
// import WeatherContainer from './components/WeatherContainer';
import { Appwrite } from 'appwrite';
// import CakeContainer from './components/CakeContainer';
// import HookCakeContainer from './components/HookCakeContainer';
// import IcecreamContainer from './components/IcecreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import UserContainerNew from './components/UserContainerNew';
// import ItemContainer from './components/itemContainer';

import store from './redux/store'
import { Provider } from 'react-redux';
import Tasks from './components/AppwriteTest';

function App() {
  const appwrite = new Appwrite();

appwrite
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite server endpoint
  .setProject('650f026a6ac5b8e7bd95') // Replace with your Appwrite project ID
  // .setKey('your-api-key');
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake></ItemContainer>
      <ItemContainer></ItemContainer>
     <CakeContainer></CakeContainer>
     <HookCakeContainer></HookCakeContainer>
     <IcecreamContainer></IcecreamContainer>
     <NewCakeContainer></NewCakeContainer>
    <UserContainerNew></UserContainerNew> */}
    {/* <WeatherContainer></WeatherContainer> */}
    <Tasks></Tasks>
    </div>
    </Provider>
  );
}

export default App;
