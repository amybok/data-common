import search from "/src/assets/search-svgrepo-com.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filtered, setFiltered] = useState([]);

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
        },

        results: {
            marginTop: "0",
            width:"300px",
            borderTop: "1px solid rgb(221 221 221)",
        },

        dropdown: {
            paddingLeft:"0", 
            backgroundColor:"white", 
            margin:"0 0 0 0",
            borderRadius:"8px",
            //display:"none"
        },

        container:{
            fontFamily:"Helvetica", 
            fontWeight:"300", 
            position:"absolute",
            borderLeft: "1px solid rgb(221 221 221)",
            borderRight: "1px solid rgb(221 221 221)",
            borderBottom:"1px solid rgb(221 221 221)",
            borderRadius:"8px",
            boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.2)",
        },

        text:{
            textDecoration:"none",
            paddingLeft:"5px"
        }
    }

    
    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        console.log(query)
        let cancel = false;

        if (query == ''){
            setSearchResults([])
            return 
        }

        // (`http://115.146.86.176/api/datasets/${query}`) -- production url
        try {
            const response = await fetch(`http://localhost:3001/api/datasets/search`);
            const data = await response.json();
            console.log(data)
            if (cancel) return
            setSearchResults(data);

            const filteredItems = searchResults.filter((dataset) => dataset.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFiltered(filteredItems)
        }
        catch (error) {
            console.error('Error fetching dataset:', error);
        }
    }

    return (
            <div className="wrapper" style={{border:"1px solid grey", borderRadius:"9.70px", position:"relative", zIndex:"20"}}>
                <input placeholder="Search" style={style.searchbox} type="text" onChange={handleSearchChange} value={searchTerm}/>
                    <div className="results-container" style={style.container}>
                        {console.log(searchResults)}
                        {console.log(filtered)}
                        <ul style={style.dropdown} overflow>
                            {filtered.map(obj => 
                                <div className="results" style={style.results}>
                                    <NavLink to={`/view/${obj.id}`} key={obj.id} style={style.text}>{obj.name}</NavLink>
                                </div>)}
                        </ul>
                    </div>
            </div>
            
    )
}

export default SearchBox
