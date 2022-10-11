import Pokemons from "./components/pokemons";

import generateStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
const store= generateStore()

  return (
    <Provider  store={store}>
      <Pokemons />
    </Provider>
  );
}

export default App;
