'use client';
import Editor from '@monaco-editor/react';
import style from './CustomEditor.module.css';

type MonacoEditorProps = React.ComponentProps<typeof Editor>;

interface ICustomEditorProps extends MonacoEditorProps {
    width?: string;
    height?: string
}

export default function CustomEditor(props: ICustomEditorProps) {
    const { width= "35%",height="50vh", ...rest } = props;
    return (
        <div style={{
            width,
            height,
            background: 'aqua'
        }}>
            <div className={style.style}>
                {/* Custom content or styles */}
            </div>
            <Editor
                {...rest}
            />
        </div>
    );
}
