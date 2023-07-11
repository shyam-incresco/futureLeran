import logo2 from "./logo2.png";
import "./App.css";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

function App() {
  const [showChatBot, setShowChatBot] = useState(false);
  return (
    <div className="App">
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          left: 0,
          height: "80px",
          border: "1px solid white",
          boxShadow: "0 0 5px black",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            height: "40px",
            width: "40px",
            backgroundImage: `url(${logo2})`,
          }}
        />
        <h3 style={{ color: "#FF00D5" }}>Future Learn AI Assist</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: "80px",
          minHeight: "100vh",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "#FF00D5" }}>Welcome to Future Learn AI Assist</h1>
        <h5 style={{ color: "#000000" }}>
          Here you can able to access future learn assist by clicking Future
          LearnIcon below
        </h5>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          height: 60,
          width: 60,
          borderRadius: "50%",
          backgroundImage: `url(${logo2})`,
          cursor: "pointer",
        }}
        onClick={() => setShowChatBot(true)}
      />
      {showChatBot && (
        <div style={{ position: "fixed", bottom: 10, right: 20 }}>
          <div style={{ position: "relative" }}>
            <embed
              src="https://landbot.online/v3/H-1657863-B1VF0DZJ67WI0AB2/index.html"
              width="600"
              height="600"
              style={{
                border: "1px solid white",
                boxShadow: "0 0 5px black",
              }}
            />
            <FaWindowClose
              style={{
                height: 20,
                width: 20,
                position: "absolute",
                right: 10,
                top: 10,
                cursor: "pointer",
              }}
              color="black"
              onClick={() => setShowChatBot(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
