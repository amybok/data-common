import React, { useState } from "react";

const RegistrationTable = () => {
    

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
            borderRadius: "8px",
            border: "1px solid",
            padding: "20px",
            marginBottom: "10px"
        },
        button: {
            backgroundColor: "darkslategrey",
            color: "white",
            borderRadius: "8px",
            padding: "2px 20px",
            boxShadow: "none",
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const inputValue = formData.get('inputName');

        sendInputValueToApi(inputValue).then(() => 
            fetch("http://localhost:3000/api/datasets", {
                method: "POST",
                body: JSON.stringify({"name": this.state.name, "method": this.state.method}),
                headers: { "Content-Type": "application.json"}
            })
        )  
    };
    
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <form onSubmit={handleSubmit} style={style.form}>

                <h1 style={{fontFamily:"Helvetica", fontWeight:"Lighter", marginTop:"50px", marginBottom:"20px"}}>
                    Register new dataset
                </h1>

                <table style={style.table}>
                    <tbody>
                        <tr>
                            <th style={style.label}>Cell type</th>
                            <button style={style.button}>Cell type</button>
                        </tr>
                        <tr>
                            <th style={style.label}><label>Name</label></th>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>Description</label></th>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>    
                            <th style={style.label}><label>Method</label></th>
                            <td><button style={style.button}>Method</button></td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>File path</label></th>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <th style={style.label}><label>Link to portals</label></th>
                            <td><input type="text"/></td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationTable