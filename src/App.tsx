// CSS CONFIG
import './App.css';
// PAGE
import Home from './pages/Home/Home';
//ICON
import { PiGithubLogoFill } from "react-icons/pi";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="flex items-center text-4xl font-bold text-white mb-10">
       
        Github Locator
        <span className="ml-3 text-5xl"><PiGithubLogoFill /></span>
      </h1>
      <Home />
    </div>
  );
}

export default App;
