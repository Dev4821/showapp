import Navbar from "./Component/Navbar";
import { useState } from "react";
import Show from "./Component/Show";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Summary from "./Component/Summary";
function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
  <Navbar/>
  <LoadingBar
  height={3}
  color='#f11946'
  progress={progress} 
/>

<Router>
      <div>
        <Switch>
          <Route exact path='/' ><Show setProgress={setProgress} key="main"/></Route>
          <Route exact path='/show/:id' component={Summary}  />
        </Switch>
      </div>
    </Router>
</>
  );
}

export default App;
