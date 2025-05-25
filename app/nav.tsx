function Message() {
  return <h1>Hello world</h1>;
}

function NavCol() {
  return (
    <div className="flex md:min-h-screen flex-row md:w-1/2 md:mx-auto lg:w-1/2 md:flex-col">
      <div>
        <div>Dillon Archer</div>
        <div>Software Developer</div>
        <div className="">Code that works. Design that lasts.</div>
      </div>
      <ul className="hidden md:flex flex-col my-16">
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}
export default function Home() {
  return <NavCol />;
}
