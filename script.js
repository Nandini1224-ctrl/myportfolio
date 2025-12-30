const text = [
  "Web Developer",
  "AI & ML Explorer",
  "IoT Innovator"
];

let index = 0;
let char = 0;
const typing = document.querySelector(".typing");

function type() {
  if (char < text[index].length) {
    typing.textContent += text[index].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (char > 0) {
    typing.textContent = text[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 400);
  }
}

type();

function scrollToSection() {
  document.getElementById("about")
    .scrollIntoView({ behavior: "smooth" });
}
document.querySelectorAll(".card-3d").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 15).toFixed(2);
    const rotateY = (x / 15).toFixed(2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
