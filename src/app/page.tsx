import { MAIN_ROUTES } from "@/routes/rutes";
import { ToolsCard } from "./components/ToolsCard/ToolsCard";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      {MAIN_ROUTES.map((route) => {
        return <ToolsCard {...route} key={route.path} />;
      })}
    </div>
  );
}
