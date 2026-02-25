function setMood(mood) {

const response = document.getElementById("response");

const moods = {
happy: {
text: "Keep shining. Your energy changes rooms.",
color: "#f6c90e"
},
sad: {
text: "It’s okay to slow down. Feel, then rise.",
color: "#2c3e50"
},
anxious: {
text: "Breathe. You are safe in this moment.",
color: "#34495e"
},
lost: {
text: "Not knowing is part of becoming.",
color: "#7f8c8d"
},
angry: {
text: "Channel it. Transform fire into power.",
color: "#c0392b"
},
calm: {
text: "Peace is strength.",
color: "#16a085"
}
};

document.body.style.background = moods[mood].color;
response.innerText = moods[mood].text;
}