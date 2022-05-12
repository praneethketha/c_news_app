import { Component } from "react";
import "./App.css";
import { Dashboard, Footer, Header, Login, Register } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        {/* <Login />
        <Register />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
