import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchaudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);

    const data = useLoaderData();
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github
        <div>
            Followers: {data.followers}
        </div>
        <div>
            <img src={data.avatar_url} alt="" width={300} />
        </div>
        </div>
    )
}

export default Github

export const GitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchaudhary');
    return response.json();
}