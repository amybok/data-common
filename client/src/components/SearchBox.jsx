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
            width:"290px",
            marginTop:"2.5px",
            marginBottom:"2.5px",
            borderTop: "1px solid rgb(221 221 221)",
            overflow:"clip"
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
            paddingLeft:"5px", 
            paddingRight:"5px",
            position:"absolute",
        }
    }

    
    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        console.log(query)
        let cancel = false;

        if (query == ''){
            setFiltered([])
            return
        }

        // (`http://115.146.86.176/api/datasets/${query}`) -- production url
        try {
            const response = await fetch(`http://115.146.86.176/api/datasets/search`);
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
            <div className="wrapper" style={{border:"1px solid grey", borderRadius:"9.70px", position:"relative"}}>
                <input placeholder="Search" style={style.searchbox} type="text" onChange={handleSearchChange} value={searchTerm}/>
                    <div className="results-container" style={style.container}>
                        {console.log(searchResults)}
                        {console.log(filtered)}
                        <ul style={style.dropdown} overflow>
                            {filtered.map(obj => 
                                <div className="results" style={style.results}>
                                    <NavLink to={`/view/${obj.id}`} key={obj.id} style={{textDecoration:"none"}}>{obj.name}</NavLink>
                                </div>)}
                        </ul>
                    </div>
            </div>
            
    )
}

export default SearchBox
