import "./App.css";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import { useEffect, useState } from "react";
import HomeMarkDown from "./contents/home.md";
import { ContentDataType } from "./components/ContentData";
import ContentData from "./components/ContentData";

const findContent = (data: Array<ContentDataType>, link: string): "*.md" => {
  return data.reduce((acc, e) => {
    if (e.link === link) {
      return e.markdown;
    } else {
      return acc;
    }
  }, HomeMarkDown);
};

function App() {
  const [markDown, setState] = useState("# Not found");

  useEffect(() => {
    fetch(findContent(ContentData, window.location.pathname) ?? HomeMarkDown)
      .then((response) => response.text())
      .then((text) => {
        setState(text);
      });
  }, []);

  return (
    <div className="App">
      <Sidebar sidebarData={ContentData} />
      <Contents markdown={markDown} />
    </div>
  );
}

export default App;
