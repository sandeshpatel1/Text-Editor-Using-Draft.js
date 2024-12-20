import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  convertFromRaw,
  convertToRaw
} from "draft-js";
import "../App.css";

// Custom Style Map for additional inline styles
const customStyleMap = {
  RED: { color: "red" },
};

const EditorComponent = ({ onEditorStateChange }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem("editor-content");
    if (savedContent) {
      const contentState = convertFromRaw(JSON.parse(savedContent));
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  // Pass editor state to parent component
  useEffect(() => {
    onEditorStateChange(editorState);
  }, [editorState, onEditorStateChange]);

  const handleBeforeInput = (char) => {
    const selection = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();
    const blockKey = selection.getStartKey();
    const block = currentContent.getBlockForKey(blockKey);
    const blockText = block.getText();

    if (char === " ") {
      // Check for `#` at the start of the line
      if (blockText.startsWith("#") && blockText.length === 1) {
        const newContent = Modifier.replaceText(
          currentContent,
          selection.merge({
            anchorOffset: 0,
            focusOffset: 1,
          }),
          "" // Remove the `#` symbol
        );
        const newEditorState = EditorState.push(
          editorState,
          newContent,
          "remove-range"
        );
        setEditorState(RichUtils.toggleBlockType(newEditorState, "header-one")); // Apply heading style
        return "handled";
      }

      // Check for `*` at the start of the line
      if (blockText.startsWith("*") && blockText.length === 1) {
        const newContent = Modifier.replaceText(
          currentContent,
          selection.merge({
            anchorOffset: 0,
            focusOffset: 1,
          }),
          "" // Remove the `*` symbol
        );
        const newEditorState = EditorState.push(
          editorState,
          newContent,
          "remove-range"
        );
        setEditorState(RichUtils.toggleInlineStyle(newEditorState, "BOLD")); // Apply bold style
        return "handled";
      }

      // Check for `**` at the start of the line
      if (blockText.startsWith("**") && blockText.length === 2) {
        const newContent = Modifier.replaceText(
          currentContent,
          selection.merge({
            anchorOffset: 0,
            focusOffset: 2,
          }),
          "" // Remove the `**` symbol
        );
        const newEditorState = EditorState.push(
          editorState,
          newContent,
          "remove-range"
        );
        setEditorState(RichUtils.toggleInlineStyle(newEditorState, "RED")); // Apply red style
        return "handled";
      }

      // Check for `***` at the start of the line
      if (blockText.startsWith("***") && blockText.length === 3) {
        const newContent = Modifier.replaceText(
          currentContent,
          selection.merge({
            anchorOffset: 0,
            focusOffset: 3,
          }),
          "" // Remove the `***` symbol
        );
        const newEditorState = EditorState.push(
          editorState,
          newContent,
          "remove-range"
        );
        setEditorState(RichUtils.toggleInlineStyle(newEditorState, "UNDERLINE")); // Apply underline style
        return "handled";
      }
    }

    return "not-handled";
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <div className="editor-container">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleBeforeInput={handleBeforeInput}
        handleKeyCommand={handleKeyCommand}
        customStyleMap={customStyleMap}
      />
    </div>
  );
};

export default EditorComponent;
