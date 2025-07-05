import down from '../../../assets/nav/down-icon.png';
import serach from '../../../assets/serach/Symbol.png';

function SearchBar() {
    return(
        <div>
            <div>
                <div>All Categories</div>
                <img src={down} alt="Down icon" />
            </div>
            <input type="text" placeholder='Serach anything...' />
            <div>
                <img src={serach} alt="Search Bar" />
            </div>
        </div>
    );
}

export default SearchBar;