

// NASA API
const count = 10
const apiKey = 'DEMO_KEY'
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${10}`

let resultArray = []

// Get 10 Images from NASA API
async function getNasaPictures(){
    try
    {
        const response = await fetch(apiUrl)
        resultArray = await response.json()
    }
    catch(error)
    {
        console.error(error)
    }
}

// On Load
getNasaPictures()