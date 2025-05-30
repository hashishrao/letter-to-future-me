const plantEmojis = ["🌱", "🌿", "🍀", "🍃", "🌼", "🍂"];

document.addEventListener("click", (e) => {
  const emoji = document.createElement("div");
  emoji.textContent = plantEmojis[Math.floor(Math.random() * plantEmojis.length)];
  emoji.className = "plant-emoji";
  emoji.style.left = `${e.clientX - 10}px`;
  emoji.style.top = `${e.clientY - 10}px`;
  document.getElementById("emoji-burst").appendChild(emoji);

  setTimeout(() => emoji.remove(), 1000);
});

// Emoji CSS injection
const emojiStyle = document.createElement("style");
emojiStyle.innerHTML = `
  .plant-emoji {
    position: fixed;
    font-size: 1.5rem;
    z-index: 998;
    animation: floatAway 1s ease-out forwards;
    pointer-events: none;
  }

  @keyframes floatAway {
    0% { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-50px) scale(1.5); }
  }
`;
document.head.appendChild(emojiStyle);