// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from '@tauri-apps/api/window';
import Titlebar from "./components/Titlebar";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import Droparea from "./components/Droparea";
import Clipboard from "./components/Clipboard";
import { Command } from '@tauri-apps/plugin-shell';

import "./App.css";


function App() {

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

  
  async function execution() {
    const command = Command.sidecar('python/example');
    const output = await command.execute();
    console.log(output.stdout);
  }

  const appWindow = getCurrentWindow();

  return (

    <main className="container w-full h-screen flex flex-col items-center justify-center gap-16">

      <Titlebar appWindow={appWindow}></Titlebar>
      <Droparea></Droparea>
      <Clipboard></Clipboard>

      <button onClick={openNewWindow} className="w-30 h-10 text-white bg-blue-500 rounded hover:scale-105 active:scale-90 duration-200">New Window</button>
      <button onClick={execution} className="w-30 h-10 text-white bg-blue-500 rounded hover:scale-105 active:scale-90 duration-200">Load Python</button>

    </main>
  );

}

export default App;
