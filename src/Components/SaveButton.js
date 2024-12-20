import React from "react";
import { convertToRaw } from "draft-js";
import "../App.css";

const SaveButton = ({ editorState }) => {
  const saveContent = () => {
    if (editorState) {
      const contentState = editorState.getCurrentContent();
      const rawContent = JSON.stringify(convertToRaw(contentState));
      localStorage.setItem("editor-content", rawContent);
      alert("Content saved successfully!");
    } else {
      alert("No content to save.");
    }
  };

  return (
    <button className="save-button" onClick={saveContent}>
      Save
    </button>
  );
};

export default SaveButton;
