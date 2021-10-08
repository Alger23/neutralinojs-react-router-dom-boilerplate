import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

const Home = () => <div> Home </div>;

const Page1 = () => <div>Here is Page1 </div>;

const Page2 = () => <div>Here is Page 2 </div>;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/home">Goto Home</Link>
        <Link to="/page1">Goto Page 1</Link>
        <Link to="/page2">Goto Page 2</Link>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2" component={Page2} />
          <Route path="/home" component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
