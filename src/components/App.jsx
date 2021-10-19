import Header from "./Header";
import ContentList from "./ContentList";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";
import FetchMoreButton from "./FetchMore";

const App = () => {
  const [content, getContent,fetchMore] = useLoadContent();

  return (
    <div className="App">
      <Header onSearch={getContent} />
      <h1>Simple content list</h1>
      <ContentList content={content} />
      <FetchMoreButton onClick={fetchMore}>Fetch More</FetchMoreButton>
      {/* TODO: Put FetchMoreButton component here */}
    </div>
  );
};

export default App;
