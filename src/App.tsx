import "./App.css";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import { useEffect, useState } from "react";
import HomeMarkDown from "./contents/home.md";
import { ContentDataType } from "./components/ContentData";
import ContentData from "./components/ContentData";

const findContent = (data: Array<ContentDataType>, link: string): "*.md" => {
  return data.reduce((acc, e) => {
    console.log(e.link, link);
    if (e.link === link) {
      return e.markdown;
    } else {
      return acc;
    }
  }, HomeMarkDown);
};

function App() {
  const [markDown, setMarkDown] = useState("# Not found");
  const [curLink, setCurLink] = useState("/home");
  console.log(curLink);
  useEffect(() => {
    fetch(findContent(ContentData, curLink) ?? HomeMarkDown)
      .then((response) => response.text())
      .then((text) => {
        setMarkDown(text);
      });
  }, [curLink]);

  return (
    <div className="App">
      <Sidebar
        curLink={curLink}
        setCurLink={setCurLink}
        sidebarData={ContentData}
      />
      <Contents markdown={markDown} />
    </div>
  );
}

export default App;
