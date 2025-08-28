(function () {
  const speedMap = {
    "1": 1.0,
    "2": 1.25,
    "3": 1.5,
    "4": 1.75,
    "5": 2.0,
    "6": 2.5,
    "7": 3.0,
    "8": 3.5,
    "9": 4.0,
    "0": 1.0 // optional reset to normal speed
  };

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "50%";
  overlay.style.left = "50%";
  overlay.style.transform = "translate(-50%, -50%)";
  overlay.style.padding = "10px 20px";
  overlay.style.fontSize = "28px";
  overlay.style.fontWeight = "bold";
  overlay.style.color = "#fff";
  overlay.style.background = "rgba(0,0,0,0.6)";
  overlay.style.borderRadius = "8px";
  overlay.style.zIndex = "999999";
  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 0.3s ease";
  overlay.style.pointerEvents = "none";
  document.body.appendChild(overlay);

  let overlayTimeout;

  function showOverlay(text) {
    overlay.textContent = text;
    overlay.style.opacity = "1";

    clearTimeout(overlayTimeout);
    overlayTimeout = setTimeout(() => {
      overlay.style.opacity = "0";
    }, 1000);
  }

  document.addEventListener("keydown", (e) => {
    if (!e.target || ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

    const video = document.querySelector("video");
    if (!video) return;

    if (speedMap[e.key]) {
      e.preventDefault();
      e.stopPropagation();

      const newSpeed = speedMap[e.key];
      video.playbackRate = newSpeed;
      console.log(`Playback speed set to ${newSpeed}x`);

      // Show overlay
      showOverlay(`${newSpeed}x`);
    }
  }, true);
})();
