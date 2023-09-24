
import './App.css';
// import WeatherContainer from './components/WeatherContainer';
import { Client, Databases, Query,Account, ID  } from "appwrite";
// import CakeContainer from './components/CakeContainer';
// import HookCakeContainer from './components/HookCakeContainer';
// import IcecreamContainer from './components/IcecreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import UserContainerNew from './components/UserContainerNew';
// import ItemContainer from './components/itemContainer';

import store from './redux/store'
import { Provider } from 'react-redux';


function App() {
  const client = new Client()

  client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite server endpoint
  .setProject('650f026a6ac5b8e7bd95')

  const account = new Account(client);

  account.create(
    ID.unique(),
    'test@example.com',
    '123321',
    'peyton list'
).then(response => {
    console.log(response);
}, error => {
    console.log(error);
});
  
  const databases = new Databases(client)

  databases.listDocuments(
    'todoDB101',
    'todocollectionDB101',
    [
      Query.equal('action','testing'),
    ]
);

console.log(databases)
  
  // Replace with your Appwrite project ID
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
    </div>
    </Provider>
  );
}

export default App;
