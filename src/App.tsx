import "./App.css";
import store from "./store/store";
import { StoreContext } from "redux-react-hook";
import DashBoard from "./view/DashBoard";
import { CountProvider, Count2Provider } from "./context";

function App() {
  return (
    <CountProvider>
      <Count2Provider>
        <StoreContext.Provider value={store}>
          <div className="App">
            <DashBoard />
          </div>
        </StoreContext.Provider>
      </Count2Provider>
    </CountProvider>
  );
}

export default App;
