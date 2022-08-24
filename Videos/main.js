/**
 * @typedef author
 * @property {string} avatarUrl
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef Video
 * @property {string} author
 * @property {string} description
 * @property {string} id
 * @property {string} thumbUrl
 * @property {string} title
 * @property {string} videoUrl
 */

function fetchVideos() {
    const url= 'http://fakes.herokuapp.com/videos';
    return fetch(url)
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .catch(function (error) {
            console.log(error)
        })
}
/**
 * @param {Video} video 
 * @returns 
 */
function template(video){
    //dom
    const videoContainer = document.createElement("div")
    videoContainer.classList.add('video');
    videoContainer.textContent = video.title;
    
    const thumb = document.createElement('img');
    thumb.src = video.thumbUrl;
    videoContainer.append(thumb);
    
    const title = document.createElement('h3');
    title.textContent =video.title;
    videoContainer.append(title)
    
    const description = document.createElement('p');
    description.textContent = video.description
    videoContainer.append(description)
     
    return videoContainer
    
    //html
    //return '<div class="video">' + video.tile + '</div>';
 }   
 
function renderVideos(videos) {
    const main = document.querySelector("main");
    videos.forEach(function (video){
        main?.append(template(video));
    });
}

function main(){
    console.log('Main')
    fetchVideos()
        .then(function (videos){ 
            renderVideos(videos);
    }) 
}

window.addEventListener('DOMContentLoaded', main);
