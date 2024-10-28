"use client";
import {Button, TextField} from "@mui/material";
import styles from "./jsonFormatter.module.css";
import {useState} from "react";

export default function JsonFormatter() {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const handleValidate = () => {
        try {
            const json = JSON.stringify(JSON.parse(input), null, 2);
            console.log(JSON);
            setInput('sdas')
            setOutput(json);
            console.log(json);
        } catch (e: unknown) {
            setOutput(e as string);
            // console.log(e);
        }
    };

    return (
        <div className={styles.container}>
            <TextField
                value={input}
                className={styles.input}
                color="error"
                label="Input"
                multiline
                rows={20}
            />
            <Button onClick={handleValidate}>Validate json</Button>
            <TextField
                value={output}
                className={styles.input}
                label="Output"
                color="error"
                multiline
                rows={20}
            />
        </div>
    );
}
