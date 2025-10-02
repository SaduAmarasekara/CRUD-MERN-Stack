import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1 className="title">Welcome to TekCRUD</h1>
          <p className="subtitle">
            Manage your users effortlessly with our powerful CRUD system.
          </p>
          <button className="users-button" onClick={() => navigate("/users")}>
            View Users
          </button>
        </div>
      </header>
      <footer className="footer">
        <p>© 2025 TekCRUD. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
