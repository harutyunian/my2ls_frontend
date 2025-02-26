'use client'

import React, { useState } from "react";
import {
    Button,
    Alert,
    Tooltip,
} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CustomEditor from "@/app/[locale]/components/CustomEditor/CustomEditor";
import styles from "./page.module.css";

export default function ScssConverterPage() {
    const [scssCode, setScssCode] = useState<string>('');
    const [cssCode, setCssCode] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleConvert = async () => {
        setError(null);
        setIsLoading(true);
        setCssCode('');

        try {
            const response = await fetch('/api/convert-css', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ scssCode }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Conversion failed');
            }

            setCssCode(data.css);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code);
    };

    return (
        <div className={styles.container}>
            {error && (
                <Alert
                    severity="error"
                    onClose={() => setError(null)}
                    sx={{ width: '100%', mb: 2 }}
                >
                    {error}
                </Alert>
            )}

            <div className={styles.editorContainer}>
                <CustomEditor
                    width="500px"
                    height="400px"
                    defaultLanguage="scss"
                    value={scssCode}
                    onChange={(val) => val && setScssCode(val)}
                />
                <CustomEditor
                    width="500px"
                    height="400px"
                    defaultLanguage="css"
                    value={cssCode}
                />
            </div>

            <div className={styles.controlSection}>
                <div className={styles.buttonGroup}>
                    <Tooltip title="Convert SCSS to CSS">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleConvert}
                            disabled={!scssCode || isLoading}
                            startIcon={<SwapHorizIcon />}
                        >
                            {isLoading ? 'Converting...' : 'Convert'}
                        </Button>
                    </Tooltip>

                    {scssCode && (
                        <Tooltip title="Copy SCSS">
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => handleCopy(scssCode)}
                                startIcon={<ContentCopyIcon />}
                            >
                                Copy SCSS
                            </Button>
                        </Tooltip>
                    )}

                    {cssCode && (
                        <Tooltip title="Copy CSS">
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => handleCopy(cssCode)}
                                startIcon={<ContentCopyIcon />}
                            >
                                Copy CSS
                            </Button>
                        </Tooltip>
                    )}
                </div>
            </div>
        </div>
    );
}