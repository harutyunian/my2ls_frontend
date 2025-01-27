import {toolsRoutes} from "@/app/css/toolsRoutes";
import Link from "next/link";


export default function CssPage() {

    return (
        <div >
           CSS PAGE
            {
                toolsRoutes.map(({name,path})=>{
                    return <Link key={path} href={path}>{name}</Link>
                })
            }
        </div>
    );
}
