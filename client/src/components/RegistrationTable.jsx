import React, { useState } from "react";

const RegistrationTable = () => {
    
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        method:'',
        file_path:'',
        portal_link:''
    })

    const style = {
        form: {
            display: "block",
            textAlign: "center"
        },
        label: {
            textAlign: "left",
            fontFamily: "Helvetica",
            padding: "5px 15px"
        },
        table: {
            display:"flex", 
            justifyContent:"center",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "white",
            boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.5)",
        },
        button: {
            backgroundColor: "darkslategrey",
            color: "white",
            borderRadius: "8px",
            padding: "2px 20px",
            boxShadow: "none",
        }
    }

    const handleInputChange = (event) => {
        
        const { name, value} = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value
        }));

        console.log(formData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        // (`http://115.146.86.176/api/datasets`) -- production url
        fetch("http://localhost:3001/api/datasets", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application.json"}
        })
        .then((response) => {
            console.log(response.status)
        }) 
    };
    
    
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {/*<form onSubmit={handleSubmit} style={style.form}>*/}
            <form style={style.form} onSubmit={handleSubmit}>

                <h1 style={{fontFamily:"Helvetica", fontWeight:"Lighter", marginTop:"50px", marginBottom:"20px"}}>
                    Register new dataset
                </h1>

                <table style={style.table}>
                    <tbody>
                        <tr>
                            <th style={style.label}>Cell type</th>
                            <td>
                                <button style={style.button}>Cell type</button>
                            </td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>Name</label></th>
                            <td><input type="text" name="name" value={formData.name} onChange={(e) => handleInputChange(e)}/></td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>Description</label></th>
                            <td><input type="text" name="description" value={formData.description} onChange={(e) => handleInputChange(e)}/></td>
                        </tr>
                        <tr>    
                            <th style={style.label}><label>Method</label></th>
                            <td>
                                <button style={style.button}>Method</button>
                            </td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>File path</label></th>
                            <td><input type="text" name="file_path" value={formData.file_path} onChange={(e) => handleInputChange(e)}/></td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>Link to portals</label></th>
                            <td><input type="text" name="portal_link" value={formData.portal_link} onChange={(e) => handleInputChange(e)}/></td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationTable