export default function JsonLayout({children, }: Readonly<{ children: React.ReactNode}>){
    return <div>
        <h1>JSON formatter</h1>
        {children}
    </div>
}
