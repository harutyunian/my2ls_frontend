"use client";
import style from "./page.module.css";
import { useState } from "react";
import CustomEditor from "@/app/components/CustomEditor/CustomEditor";
import { Button } from "@mui/material";

export default function JsonPage() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleEditorChange = (val: string | undefined) => {
    if (val) setInput(val);
  };

  const handleValidate = () => {
    try {
      const parsedJSON = JSON.parse(input);
      const formattedJSON = JSON.stringify(parsedJSON, null, 4);
      setOutput(formattedJSON);
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      setOutput(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className={style.editorContainer}>
      <CustomEditor
        width="45%"
        height="60vh"
        value={input}
        className={style.editor}
        onChange={handleEditorChange}
        defaultLanguage="json"
      />
      <Button size="large" variant="contained" onClick={handleValidate}>
        Validate
      </Button>
      <CustomEditor
        width="45%"
        height="60vh"
        options={{ readOnly: true }}
        value={output}
        className={style.editor}
      />
    </div>
  );
}
