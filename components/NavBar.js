import Link from "next/link"


const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Astris</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/Category"><a>Category</a></Link>
            <Link href="/About"><a>About</a></Link>
            <Link href="/Contact"><a>Contact</a></Link>
        </nav>
    )
}
export default NavBar