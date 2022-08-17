import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from './store';

import Home from './containers/Home';
import Error404 from './containers/errors/Error404';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Displayer */}
          <Route path="*" element = {<Error404/>}/>
          
          <Route exact path='/' element = {<Home/>}/>

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
