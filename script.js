// Unsplash API
const count = 10;
const apiKey = 'icT8lZJJC5GWy_z0EuGqZP-tsOpAOwGsRvzUEseXWv8'; 
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