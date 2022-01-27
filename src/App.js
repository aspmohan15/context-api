import Header from "./components/Header";
import Auth from "./components/Auth";
import { UserContextProvider } from './context/useContext'

function App() {
 
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>


    </div>
  );
}

export default App;
