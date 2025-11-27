import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState({ name: "", number: 15 });

  return (
    <>
      <textarea
        onChange={(event) => {
          setCount({
            name: event.target.value,
            number: count.number
          })
          console.log(event.target.value);
        }}
      ></textarea>
      <button
        onClick={async (event) => {
          await fetch("http://localhost:3000/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: count.name, number: count.number }),
          });
        }}
      >
        PushMeFucker
      </button>
      <button
        onClick={async (event) => {
          const url = "http://localhost:3000/ceva";
          try {
            const variabilaAuxiliara = await fetch(url);
            const raspuns = await variabilaAuxiliara.json();
            console.log(raspuns);
          } catch (error) {
            console.error(error.message);
          }
        }}
      >
        Push me for post
      </button>
    </>
  );
}
export default App;
