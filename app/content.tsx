function Content() {
  return (
    <div className="flex flex-col md:w-1/2 flex-1">
      <h1 className="md:hidden block">About</h1>
      <p>
        Hi, my name is Dillon Archer and I'm a Developer passionate about
        creating innovate solutions to complex problems. I enjoy taking on new
        challenges I recently graduated with my Master's in Computer Science
        from Florida International University in Miami, Florida, where I also
        earned a Bachelor's Degree in Computer Engineering. I recently worked as
        a Developer Assistant at the University's College of Business where I
        worked on a new Enterprise level Software System.
      </p>
    </div>
  );
}

export default function Home() {
  return <Content />;
}
