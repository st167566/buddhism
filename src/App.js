import React from "react";
import "./App.css";
import logo from "./assets/images/logo.svg";
import Router from "./router";
import store from "./store/index";
import { Provider } from "react-redux";
import "./assets/css/reset.css";

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Loading...</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false,
    };
  }
  componentDidMount() {
    this.doSomething();
  }

  doSomething = () => {
    //这里以后要是有一些需要进入页面前操作的东西可以在这写，didMount是true时进入，false时展示loading
    this.setState({ didMount: true });
  };

  render() {
    const { didMount } = this.state;
    if (!didMount) {
      return <Loading />;
    }
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
