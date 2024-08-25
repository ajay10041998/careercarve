import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mentors from './components/Mentors';
import Domain from './components/Domain';
import Expert from './components/Expert'; // Import the Mentor component

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Mentors} />
        <Route exact path="/domain" component={Domain} />
        <Route exact path="/mentors/:area_of_expert" component={Expert} /> {/* Handle domain parameter */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
