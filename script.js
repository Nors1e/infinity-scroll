// Unsplash API
const count = 10;
const apiKey = config.MY_KEY; 
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=${apiKey}&count={count}';

//Gets photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json
        console.log(data);
    } catch (error) {
        //Catch Error here
    }
}

// On Load
getPhotos();