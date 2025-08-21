import { useLocation } from "react-router";

const Download = () => {

    const id  = useLocation()
    .pathname.slice(location.pathname.lastIndexOf("/"))
    .slice(1);

    const text = "This dataset is part of the data registry. For more information, visit: ";

    let content = ""

    let owner = ""

    const getOwner = async () => {
        const response = await fetch(`https://${import.meta.env.VITE_APP_API_URL}/api/datasets/${id}`)
        const dataset = await response.json()
        //console.log(dataset.owner)
        owner = dataset.owner

        const text2 = "The raw data is located at ";
        content = text.concat(window.location.href,'. ', text2, owner)
        console.log(content)

        download("README.txt", content)
    }

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }

    // need to write to a txt file and then produce for download

    return (
        <div>
            <button onClick={getOwner}>Download Readme</button>
        </div>
    )
}

export default Download