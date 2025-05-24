function Message() {
    return <h1>Hello world</h1>;
}

function NavCol() {
    return (
        <div className="flex flex-row md:flex-col">
            <a id="name" href="index.html">Dillon Archer</a>
            <a href="#">Projects</a>
            <a href="#">Coursework</a>
            <a href="#">Contact</a>
        </div>
    )
}
export default function Home() {
    return (

        <NavCol />

    );
}