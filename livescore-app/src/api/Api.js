const API_KEY = "hx2ypgjbBEQvRUIB8HPu7XlIX8k1"


// Get all the upcoming matches update

export const getMatches = () =>{
    const url = 'https://cricapi.com/api/matches?apikey=${API_KEY}';
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR : ", error));
};