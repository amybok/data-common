import { useLocation } from "react-router";

const Download = () => {

    const id  = useLocation()
    .pathname.slice(location.pathname.lastIndexOf("/"))
    .slice(1);

    const text = "This dataset is part of the data registry. For more information, visit: ";

    let content = ""

    let owner = ""

    const getOwner = async () => {
        const response = await fetch(`http://localhost:3001/api/datasets/${id}`)
        const dataset = await response.json()
        //console.log(dataset.owner)
        owner = dataset.owner

        const text2 = "The raw data is located at ";
        content = text.concat(window.location.href,'. ', text2, owner)
        console.log(content)
    }

    

    return (
        <div>
            <button onClick={getOwner}>Download Readme</button>
        </div>
    )
}

export default Download