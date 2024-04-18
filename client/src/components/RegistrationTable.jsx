import React, { useState } from "react";

const RegistrationTable = () => {
    

    const style = {
        form:{
            display: "block",
            justifyItems: "right"
        },
        item:{
            margin: "5px",
            padding: "5px 5px",
            border: "1px solid"
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
        <div>
            <form onSubmit={handleSubmit} style={style.form}>
                <div className="formItem" style={style.item}>
                    <label>ID: </label>
                    <input placeholder="PDC006"/>
                    <button>Cell type</button>
                </div>
                <div className="formItem" style={style.item}>
                    <label>Name: </label>
                    <input type="text"/>
                </div>
                <div className="formItem" style={style.item}>
                    <label>Description: </label>
                    <input type="text"/>
                </div>
                <div className="formItem" style={style.item}>
                    <label>Method: </label>
                    <button>Method</button>
                </div>
                <div className="formItem" style={style.item}>
                    <label>File path: </label>
                    <input type="text"/>
                </div>
                <div className="formItem" style={style.item}>
                    <label>Link to portals: </label>
                    <input type="text"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationTable