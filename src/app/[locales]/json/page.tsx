'use client';
import React, { useState } from "react";
import {
    Button,
    Typography,
    Alert,
    Tooltip
} from "@mui/material";
import ValidationIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/ErrorOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CodeIcon from '@mui/icons-material/Code';
import CustomEditor from "@/app/[locales]/components/CustomEditor/CustomEditor";
import styles from "./page.module.css";

export default function JsonFormatterPage() {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const handleEditorChange = (val: string | undefined) => {
        if (val) {
            setInput(val);
            setError(null);
            setIsValid(null);
        }
    };

    const handleValidate = () => {
        try {
            const parsedJSON = JSON.parse(input);
            const formattedJSON = JSON.stringify(parsedJSON, null, 2);
            setOutput(formattedJSON);
            setIsValid(true);
            setError(null);
        } catch (e: unknown) {
            const errorMessage = e instanceof Error ? e.message : String(e);
            setOutput('');
            setIsValid(false);
            setError(`Invalid JSON: ${errorMessage}`);
        }
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className={styles.container}>
            <Typography variant="h4" gutterBottom>
                JSON Formatter & Validator
            </Typography>

            {error && (
                <Alert
                    severity="error"
                    icon={<ErrorIcon />}
                    onClose={() => setError(null)}
                    sx={{ width: '100%', mb: 2 }}
                >
                    {error}
                </Alert>
            )}

            <div className={styles.editorContainer}>
                <CustomEditor
                    width="45%"
                    height="60vh"
                    value={input}
                    onChange={handleEditorChange}
                    defaultLanguage="json"
                    // placeholder="Paste your JSON here..."
                />

                <CustomEditor
                    width="45%"
                    height="60vh"
                    options={{ readOnly: true }}
                    value={output}
                    defaultLanguage="json"
                />
            </div>

            <div className={styles.controlSection}>
                <Tooltip title="Validate and Format JSON">
                    <Button
                        variant="contained"
                        color={isValid === false ? "error" : "primary"}
                        onClick={handleValidate}
                        disabled={!input}
                        startIcon={isValid === true ? <ValidationIcon /> : <CodeIcon />}
                    >
                        {isValid === true ? 'Validated' : 'Validate'}
                    </Button>
                </Tooltip>

                {input && (
                    <Tooltip title="Copy Input">
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleCopy(input)}
                            startIcon={<ContentCopyIcon />}
                        >
                            Copy Input
                        </Button>
                    </Tooltip>
                )}

                {output && (
                    <Tooltip title="Copy Formatted JSON">
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleCopy(output)}
                            startIcon={<ContentCopyIcon />}
                        >
                            Copy Formatted
                        </Button>
                    </Tooltip>
                )}
            </div>
        </div>
    );
}