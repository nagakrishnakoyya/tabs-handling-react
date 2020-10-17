import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import B4Tabs from './components/B4Tabs';
import CustomTabs from './components/CustomTabs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/b4-tabs" exact component={B4Tabs} />
          <Route path="/custom-tabs" exact component={CustomTabs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
