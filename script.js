// Typewriter effect
const text = "Welcome to Chai Corner ☕";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

