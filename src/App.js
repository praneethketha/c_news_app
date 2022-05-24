import "./App.css";
import { Dashboard, Footer, Header, Login, Register } from "./Components";

const App = () => {
  return (
    <div>
      <Header />
      <section className="min_height">
        <Dashboard />
        <Login />
        <Register />
      </section>
      <Footer />
    </div>
  );
};

export default App;
