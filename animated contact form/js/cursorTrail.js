document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    document.getElementById("sparkle-trail").appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.remove();
    }, 600);
  });
  
  // Sparkle CSS injection
  const style = document.createElement("style");
  style.innerHTML = `
    .sparkle {
      position: fixed;
      width: 6px;
      height: 6px;
      background: radial-gradient(white, #a5d6a7);
      border-radius: 50%;
      pointer-events: none;
      animation: sparkleFade 0.6s forwards;
      z-index: 999;
    }
  
    @keyframes sparkleFade {
      0% { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(2); }
    }
  `;
  document.head.appendChild(style);