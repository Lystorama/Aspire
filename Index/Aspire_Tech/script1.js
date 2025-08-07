function playVideo() {
  const videoContainer = document.getElementById('video-container');
  videoContainer.style.display = 'block';
  startConfetti();
}

function startConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const numParticles = 300;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 8 + 2,
      color: hsl(${Math.random() * 360}, 100%, 70%),
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }
  
  draw();
}