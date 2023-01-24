import { useState } from "react";

import data from "../../data/users.json";

// Components
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

// CSS
import "./styles.css";

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false)
    const [results, setResults] = useState([]);

    /*
    const handleSearchClick = () => {
        setIsAtTop(!isAtTop);
    }
    const handleCloseClick = () => {
        setIsAtTop(!isAtTop);
    }
    */

    const handleCloseSearch = () => {
        setIsAtTop(false)
        setResults([])
    }
    const handleSearchClick = (searchText) => {
        setIsAtTop(true)
        if(data?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = data.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.phone.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus)
                )
            });
            setResults(filteredData);
        }
    }
    console.log(results)    

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox 
                onSearch={handleSearchClick} 
                onClose={handleCloseSearch} 
                isSearching={isAtTop} 
            />
            <SearchResults results={results} isSearching={isAtTop}/>
        </div>
    );
}