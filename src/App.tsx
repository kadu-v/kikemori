import "./App.css";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Contents link={window.location.pathname} />
    </div>
  );
}

export default App;
