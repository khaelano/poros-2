import logo from "./logo.svg";
import "./App.css";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#282c34",
    padding: "10px 20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
  };

  return (
    <nav style={navbarStyle}>
      <img src={logo} alt="logo" style={{ height: "40px" }} />
      <div>
        <a href="#" style={linkStyle}>
          Home
        </a>
        <a href="#" style={linkStyle}>
          Products
        </a>
        <a href="#" style={linkStyle}>
          About
        </a>
        <a href="#" style={linkStyle}>
          Contact
        </a>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
