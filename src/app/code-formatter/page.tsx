import {toolsRoutes} from "@/app/code-formatter/toolsRoutes";
import Link from "next/link";


export default function CssPage() {

    return (
        <div>
            CSS PAGE
            {
                toolsRoutes?.child && toolsRoutes.child.map(({name, path}) => {
                    return <Link key={path} href={path}>{name}</Link>
                })
            }
        </div>
    );
}
