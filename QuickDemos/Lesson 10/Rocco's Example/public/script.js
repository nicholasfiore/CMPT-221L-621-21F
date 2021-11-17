let spotifyPlaylist = document.querySelector("#spotify-playlist");
let playlistLink = document.querySelector("#playlist-link");
let submitButton = document.querySelector("#change-playlist");

submitButton.addEventListener("click", () => {
    console.log(spotifyPlaylist.getAttribute('src'));
    let string = playlistLink.value;
    console.log(string.substring(0, 25) + "embed/" + string.substring(25, 57) + "utm_source=generator");
    let newLink = string.substring(0, 25) + "embed/" + string.substring(25, 57) + "utm_source=generator";
    spotifyPlaylist.setAttribute('src', newLink);
});