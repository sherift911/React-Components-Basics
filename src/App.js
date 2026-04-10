import "./App.css";
import Header from "./Header.js";
import Post from "./Post.js";
import SideMenu from "./SideMenuArea.js";

function App() {
  return (
    <div className="App">
      <Header />
      {/* container */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* posts & side menu */}
        <div
          style={{
            width: "60%",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* posts */}
          <div style={{ flexBasis: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/* side menu */}
          <div style={{ flexBasis: "30%" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
