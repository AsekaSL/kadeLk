import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

function Nav() {
    return(
        <div className="flex flex-col p-6">
            <TopNav/>
            <BottomNav/>
        </div>
    );
}

export default Nav;