import Nav from "../components/nav/Nav";
import Search from "../components/Search/Search";


function Home() {
    return(
        <div className="flex flex-col m-3">
            <Nav/>
            <Search/>
        </div>
    );
}

export default Home;