import State from "./Hooks/useState";
import Effect from "./Hooks/useEffect";
import Ref from "./Hooks/useRef";
import Context from "./Hooks/useContext";
import Reducer from "./Hooks/useReducer";
import Callback from "./Hooks/useCallback";
import Memo from "./Hooks/useMemo";
import LayoutEffect from "./Hooks/useLayoutEffect";
import ImperativeHandler from "./Hooks/useImperativeHandler";
import DebugValue from "./Hooks/useDebugValue";
import './App.css';

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <Effect />
      <hr />
      <Ref />
      <hr />
      <Context />
      <hr />
      <Reducer />
      <hr />
      <Memo />
      <hr />
      <Callback />
      <hr />
      <LayoutEffect />
      <hr />
      <ImperativeHandler />
      <hr />
      <DebugValue />
      <hr />
    </div>
  );
}

export default App;
