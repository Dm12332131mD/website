// Header
let [ headerTitle, headerDescription ] = Manager.getIDs("header-title", "header-description");
let headerHonked = false;
if(Math.floor(Math.random() * 100) === 69) {
    headerTitle.innerText = "Psst";
    headerTitle.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
else {
    headerTitle.innerText = randomize([
        "Welcome!", "Yo!", "Ey!", "What's up!",
        "Hello!", "Hi!", "Honk!"
    ]);
    headerTitle.onclick = e => {
        if(!headerHonked) {
            headerTitle.innerText = "GOOS!";
            headerDescription.innerText = "Imagine finding easter eggs";
            headerHonked = true;
        };
        new Audio("/src/audios/honk.mp3").play();   
    };
};
headerDescription.innerText = randomize([
    "Much DmmD", "Wha' cha' need?",
    "How's it going?", "Looking great",
    "We got some cool stuff"
]);