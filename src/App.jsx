import Pokemons from "./components/pokemons";

import generateStore from "./redux/store";
import { Provider } from "react-redux";

import { useDispatch, useSelector} from 'react-redux'
import { getPokemonsAction } from "./redux/pokeDucks";


function App() {
const store= generateStore()



  return (
    <Provider  store={store}>
      <div className="container mt-3">
      <Pokemons />

      </div>
    </Provider>
  );
}

export default App;
