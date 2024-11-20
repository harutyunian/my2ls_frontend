import { MAIN_ROUTES } from "@/routes/rutes";
import { ToolsCard } from "./components/ToolsCard/ToolsCard";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <h1>All-in-One Online Tools for Code, JSON, Converters, and More</h1>
      <p>Discover a wide range of free online tools for developers and tech enthusiasts. <br/>
        From code editors and JSON processors to converters and formatters, <br/>
        our platform offers everything you need to streamline your workflow and boost productivity. <br/>
        Simplify your tasks with our fast, reliable, and user-friendly tools—all in one place!</p>
      {MAIN_ROUTES.map((route) => {
        return <ToolsCard {...route} key={route.path} />;
      })}
        <p><b>OTHER TOOLS COMING SOON.....</b></p>
    </div>
  );
}
