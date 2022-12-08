import { useState } from "react";
import axios from "axios";
import ShowData from './ShowData';

function Search() {
    const [search, setSearch] = useState();
    const [result, setResult] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
            params: { q: `${search}`, autoCorrect: 'true' },
            headers: {
                'X-RapidAPI-Key': '4dc052447fmsh1b6d964a1fffb33p1b55f0jsn2438af82d279',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };

        const getData = async () =>{
            await axios.request(options).then(function (response) {
                setResult(response.data.value)
                // console.log(response.data.value)
            }).catch(function (error) {
                console.error(error);
            });
        }
        getData();
        console.log(result)
        
    }
    return (
        <div className="container">
            <h1>Search Engine</h1>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Type to Search' />
            <div className="MYbtn" onClick={handleClick}>
                <p>Search</p>
            </div>
            { result.length > 0 && <ShowData result={result}/>}
        </div>
    );
}

export default Search;