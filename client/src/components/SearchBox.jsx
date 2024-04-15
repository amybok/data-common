import search from "/src/assets/search-svgrepo-com.svg";
import React, { useState } from "react";


const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const style = {
        searchbox: {
            border: "1px solid grey",
            borderRadius: "8px",
            paddingTop: "7px",
            paddingBottom: "7px",
            paddingLeft: "7px",
            paddingRight: "7px",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "lighter",
            color: "grey",
            width: "300px",
            boxSizing: "border-box",
            fontSize: "15px"
        },

        icon: {
            width:'20px', 
            boxSizing:"border-box", 
            position:"absolute", 
            transform: "translateY(-50%)", 
            top:"50%", 
            left:"85%"
        }
    }

    
    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        let cancel = false;

        try {
            const response = await fetch(`http://localhost:3000/datasets`);
            const data = await response.json();
            if (cancel) return
            console.log(data)
            setSearchResults(data);

        }
        catch (error) {
            console.error('Error fetching autocomplete suggestions:', error);
        }
    }

    return (
        <div>
            <div className="wrapper">
                <input placeholder="Search" style={style.searchbox} type="text" onChange={handleSearchChange} value={searchTerm}/>
            </div>
            {searchResults.length > 0 && (
                <div className="results-container">
                    {searchResults.map((result, index) => (
                        <div key={index} className="result-item">
                            {result}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBox