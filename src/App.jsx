import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(true);
  const [characterAllowed, setCharacter] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      string += "0123456789";
    }
    if (characterAllowed) {
      string += "!@#$%^&*()_~";
    }
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const passwordGeneratorToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, characterAllowed, passGenerator]);

  return (
    <>
      <h1 className="text-5xl text-white justify-center ml-96 mt-12">
        Password Generator
      </h1>
      <div
        className="w-full max-w-2xl mx-auto shadow-lg px-4 py-12 text-orange-600 bg-gray-700 rounded-xl mt-24
       ml-60 text-2xl justify-center overflow-hidden"
      >
        <input
          type="text"
          value={password}
          placeholder="password"
          className="w-full rounded-3xl py-3 text-center outline-none"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={passwordGeneratorToClipboard}
          className="mt-4 ml-5 text-sky-400 cursor-pointer"
        >
          Copy
        </button>
        <div className="flex text-2xl m-4 ">
          Length
          <input
            className="ml-2 mt-1"
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="ml-2">{length}</label>
        </div>
        <div className="ml-4">
          Numbers
          <input
            className="ml-2"
            type="checkbox"
            onChange={() => {
              numberAllowed((prev) => !prev);
            }}
          />
        </div>

        <div className="ml-4 mt-4">
          Characters
          <input
            className="ml-2"
            type="checkbox"
            onChange={() => {
              characterAllowed((prev) => !prev);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
