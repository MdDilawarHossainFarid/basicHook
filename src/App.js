import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home  from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigaton';
import Useeffects from './hooks/Useeffects';


const App = () => {
    return (
        <>
          <Router>
             <Navigation/>
              <Switch>
                    <Route path='/' component={Home} exact></Route>
                    <Route path='/about' component={About} exact></Route>
                
              </Switch>
          </Router>
          <Useeffects/>
        </>
   )
}

export default App; 