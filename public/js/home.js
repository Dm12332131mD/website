// Header
let [ headerTitle, headerDescription ] = Manager.getIDs("header-title", "header-description");
if(Math.floor(Math.random() * 100) === 69) {
    headerTitle.innerText = "Psst";
    headerTitle.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
else headerTitle.innerText = randomize([
    "Welcome!", "Yo!", "Ey!", "What's up!",
    "Hello!", "Hi!", "Honk!"
]);
headerDescription.innerText = randomize([
    "Much DmmD", "Wha' cha' need?",
    "How's it going?", "Looking great",
    "We got some cool stuff"
]);