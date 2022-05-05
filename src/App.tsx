import "./App.css";
import store from "./store/store";
import { StoreContext } from "redux-react-hook";
import DashBoard from "./view/DashBoard";

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <DashBoard />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
