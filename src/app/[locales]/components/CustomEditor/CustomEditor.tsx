'use client';
import Editor from '@monaco-editor/react';
import style from './CustomEditor.module.css';
import dynamic from 'next/dynamic';


type MonacoEditorProps = React.ComponentProps<typeof Editor>;

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
});

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
            <MonacoEditor
                {...rest}
            />
        </div>
    );
}
