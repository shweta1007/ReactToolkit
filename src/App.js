
import { useDispatch } from "react-redux";
import './App.css';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // const  {error} = useSelector((state) => state.user);
  // console.log( error,"===========>testing");
  const dispatch = useDispatch();

  return (
    <>
<Routes/>
    </>
  );
}

export default App;
