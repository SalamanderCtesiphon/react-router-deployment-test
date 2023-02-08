import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Hello from App</h1>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default App;
