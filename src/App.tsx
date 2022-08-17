import "./App.css";
import Post from "./components/post";

function App() {
  return (
    <div className="App">
      <Post
        title="Hello I am post"
        footer={
          <>
            <div className="footer">I am the footer</div>
          </>
        }
        onPostClick={(index, name) => {
          console.log(index, name);
        }}
      ></Post>
    </div>
  );
}

export default App;
