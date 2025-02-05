export default function CssFormatterLayout({ children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div style={{ padding: "0 40px 0px 40px" }}>
            <h1>SCSS to CSS Converter</h1>
            {children}
        </div>
    );
}
