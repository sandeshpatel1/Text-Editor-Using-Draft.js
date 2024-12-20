import React, { useState } from "react";
import Title from "./Components/Title";
import Button from "./Components/SaveButton";
import EditorComponent from "./Components/Editor";
import "./App.css";

const App = () => {
  const [editorState, setEditorState] = useState(null);

  return (
    <div className="app-container">
      <Title />
      <div className="toolbar">
        <Button editorState={editorState} />
      </div>
      <EditorComponent onEditorStateChange={setEditorState} />
    </div>
  );
};

export default App;
