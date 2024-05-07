import React, { useState } from "react";

const RegistrationTable = () => {
    
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        method:'',
        file_path:'',
        owner:'',
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
            padding: "10px 15px"
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
        },
        row: {
            paddingTop: "30px"
        }
    }

    const handleInputChange = (event) => {
        
        const { name, value} = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value
        }));

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

        

        // (`http://115.146.86.176/api/datasets`) -- production url
        fetch("http://115.146.86.176/api/datasets", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then((response) => {
            console.log(response.status)
        }) 
        .catch(error => console.error('Error:', error.message))
    };
    
    
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {/*<form onSubmit={handleSubmit} style={style.form}>*/}
            <form style={style.form} onSubmit={handleSubmit}>

                <h2 style={{fontFamily:"Helvetica", fontWeight:"Lighter", marginTop:"50px", marginBottom:"20px"}}>
                    Register new dataset
                </h2>

                <table style={style.table}>
                    <tbody>
                        {/*<tr>
                            <th style={style.label}>Cell type</th>
                            <td>
                                <button style={style.button}>Cell type</button>
                            </td>
                        </tr>*/}
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
                                {/*<input type="text" name="method" value={formData.method} onChange={(e) => handleInputChange(e)}/>*/}
                                <select name="method" value={formData.method} onChange={(e) => handleInputChange(e)}>
                                    <option value="">(Select)</option>
                                    <option value="WGS">WGS</option>
                                    <option value="LLS">LLS</option>
                                    <option value="Spatial">Spatial</option>
                                    <option value="Methyl">Methyl</option>
                                    <option value="miRNA">miRNA</option>
                                </select>
                                {/*<button style={style.button}>Method</button>*/}
                            </td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>File path</label></th>
                            <td><input type="text" name="file_path" value={formData.file_path} onChange={(e) => handleInputChange(e)}/></td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>Owner</label></th>
                            <td><input type="text" name="owner" value={formData.owner} onChange={(e) => handleInputChange(e)}/></td>
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