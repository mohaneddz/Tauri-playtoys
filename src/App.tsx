// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import Titlebar from "./components/Titlebar";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import Droparea from "./components/Droparea";
import Clipboard from "./components/Clipboard";
import { Command } from '@tauri-apps/plugin-shell';
import { getCurrentWebview } from "@tauri-apps/api/webview";
import { useState } from "react";

import "./App.css";


function App() {

  const appWindow = getCurrentWebview();
  const [output, setOutput] = useState<string>("");

  function openNewWindow() {
    const uniqueLabel = `window_${Date.now()}`;
    const example = new WebviewWindow(uniqueLabel, {
      url: "/", // Make sure your frontend serves this path
      title: "Tauri Studio",
      decorations: false,
      transparent: true,
      width: 800,
      height: 600,
      resizable: true,

    });

    example.once("tauri://created", () => {
      console.log("Window successfully created!");
    });

    example.once("tauri://error", (err) => {
      console.error("Error creating window:", err);
    });
  }


  async function loadPython() {
    const command = Command.sidecar('python/example');
    const output = await command.execute();
    console.log(output);
  }
  async function pingServer() {
    try {
      const response = await fetch("http://localhost:5000/hello");
      const data = await response.text();
      console.log("Server Response:", data);
      setOutput(data);
    } catch (error) {
      console.error("Error pinging server:", error);
    }
  }

  return (

    <main className="container w-full h-screen flex flex-col items-center justify-center gap-8">

      <div>
        <h1 className="text-4xl font-bold text-gray-600">Tauri PlayToys</h1>
        <Titlebar appWindow={appWindow}></Titlebar>
      </div>

      <div>
        <h1 className="text-center text-xl font-bold text-gray-600 p-4">Drop File Area</h1>
        <Droparea></Droparea>
      </div>

      <div>
        <h1 className="text-center text-xl font-bold text-gray-600 p-4">Clipboard Item</h1>
        <Clipboard></Clipboard>
      </div>

      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center text-xl font-bold text-gray-600 p-4">Clipboard Item</h1>
        <button onClick={openNewWindow} className="w-30 h-10 text-white bg-blue-500 rounded hover:scale-105 active:scale-90 duration-200">New Window</button>
      </div>


      <div>
        <h1 className="text-center text-xl font-bold text-gray-600 p-4">Python Server</h1>
        <div className="flex gap-4">
          <button onClick={loadPython} className="w-30 h-10 text-white bg-rose-500 rounded hover:scale-105 active:scale-90 duration-200">Start Server</button>
          <button onClick={pingServer} className="w-30 h-10 text-white bg-blue-500 rounded hover:scale-105 active:scale-90 duration-200">Ping Server</button>
        </div>
        <p className="text-center text-gray-500 border-dashed border-2 py-4 px-12 mt-8">{output}</p>
      </div>

    </main>
  );

}

export default App;
