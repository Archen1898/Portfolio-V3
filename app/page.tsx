import  Content  from "./content";
import NavCol from "./nav";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-2">
        <NavCol />
        <Content />
      </div>
    </div>
  );
}