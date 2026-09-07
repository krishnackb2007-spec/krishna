/* =========================================================
   KRISHNA.SYSTEM
   COMPLETE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ELEMENTS
     ======================================================= */

  const body = document.body;

  const bootScreen =
    document.getElementById("bootScreen");

  const bootProgress =
    document.getElementById("bootProgress");

  const bootPercent =
    document.getElementById("bootPercent");

  const clock =
    document.getElementById("clock");

  const dangerToggle =
    document.getElementById("dangerToggle");

  const dangerFlash =
    document.getElementById("dangerFlash");

  const menuBtn =
    document.getElementById("menuBtn");

  const nav =
    document.getElementById("nav");

  const phoneHackBtn =
    document.getElementById("phoneHackBtn");

  const hackModal =
    document.getElementById("hackModal");

  const hackCount =
    document.getElementById("hackCount");

  const hackLog =
    document.getElementById("hackLog");

  const closeHack =
    document.getElementById("closeHack");

  const terminalInput =
    document.getElementById("terminalInput");

  const terminalOutput =
    document.getElementById("terminalOutput");

  const contactForm =
    document.getElementById("contactForm");

  const toast =
    document.getElementById("toast");


  /* =======================================================
     BOOT SEQUENCE
     ======================================================= */

  let bootValue = 0;

  const bootTimer = setInterval(() => {

    bootValue += 5;

    if (bootValue > 100) {
      bootValue = 100;
    }

    if (bootProgress) {
      bootProgress.style.width =
        bootValue + "%";
    }

    if (bootPercent) {
      bootPercent.textContent =
        bootValue + "%";
    }

    if (bootValue >= 100) {

      clearInterval(bootTimer);

      setTimeout(() => {

        if (bootScreen) {
          bootScreen.classList.add("hidden");
        }

      }, 500);

    }

  }, 100);


  /* =======================================================
     CLOCK
     ======================================================= */

  function updateClock(){

    const now = new Date();

    const h =
      String(now.getHours()).padStart(2,"0");

    const m =
      String(now.getMinutes()).padStart(2,"0");

    const s =
      String(now.getSeconds()).padStart(2,"0");

    if(clock){
      clock.textContent =
        `${h}:${m}:${s}`;
    }

  }

  updateClock();

  setInterval(updateClock,1000);


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  if(menuBtn){

    menuBtn.addEventListener("click", () => {

      nav.classList.toggle("open");

    });

  }

  document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

    });

  });


  /* =======================================================
     REVEAL ANIMATIONS
     ======================================================= */

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            entry.target.classList.add("visible");

          }

        });

      },
      {
        threshold:.12
      }
    );

  document
    .querySelectorAll(".reveal")
    .forEach(el => {

      revealObserver.observe(el);

    });


  /* =======================================================
     SKILL BARS
     ======================================================= */

  const skillObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            entry.target
              .querySelectorAll(
                ".skill-track span"
              )
              .forEach(bar => {

                const width =
                  bar.dataset.width;

                setTimeout(() => {

                  bar.style.width =
                    width;

                },200);

              });

          }

        });

      },
      {
        threshold:.2
      }
    );

  document
    .querySelectorAll(".skills-panel")
    .forEach(panel => {

      skillObserver.observe(panel);

    });


  /* =======================================================
     DANGER MODE
     ======================================================= */

  let dangerMode = false;

  dangerToggle.addEventListener("click", () => {

    dangerMode = !dangerMode;

    body.classList.toggle(
      "danger",
      dangerMode
    );

    const span =
      dangerToggle.querySelector("span");

    if(dangerMode){

      if(span){
        span.textContent = "● ON";
      }

      showToast(
        "⚠ DANGER MODE ACTIVE // SIMULATION"
      );

      dangerFlash.style.opacity = "1";

      setTimeout(() => {
        dangerFlash.style.opacity = "";
      },150);

    }else{

      if(span){
        span.textContent = "● OFF";
      }

      showToast(
        "SYSTEM RETURNED TO NORMAL"
      );

    }

  });


  /* =======================================================
     HARD VIBRATION USING JAVASCRIPT
     ======================================================= */

  let shakeTimer = null;

  function emergencyShake(){

    let count = 0;

    clearInterval(shakeTimer);

    shakeTimer = setInterval(() => {

      if(count > 18){

        clearInterval(shakeTimer);

        body.style.transform = "";

        return;

      }

      const x =
        Math.floor(Math.random()*18) - 9;

      const y =
        Math.floor(Math.random()*14) - 7;

      const r =
        (Math.random()*1.2) - .6;

      body.style.transform =
        `translate(${x}px,${y}px) rotate(${r}deg)`;

      count++;

    },35);

  }


  /* =======================================================
     PHONE HACK SIMULATION
     ======================================================= */

  phoneHackBtn.addEventListener(
    "click",
    startPhoneSimulation
  );


  function startPhoneSimulation(){

    hackModal.classList.add("active");

    body.classList.add("danger");

    emergencyShake();

    let count = 3;

    hackCount.textContent =
      count;

    hackLog.textContent =
      "INITIALIZING PHONE ACCESS...";

    const countdown =
      setInterval(() => {

        count--;

        if(count > 0){

          hackCount.textContent =
            count;

          hackLog.textContent =
            "BYPASSING SECURITY...";

        }

        if(count === 0){

          clearInterval(countdown);

          hackCount.textContent =
            "✓";

          hackLog.innerHTML =
            "PHONE ACCESS: SIMULATION ONLY<br>" +
            "NO REAL DEVICE ACCESS<br>" +
            "<strong>JUST KIDDING // SYSTEM SECURE</strong>";

        }

      },850);

  }


  /* =======================================================
     CLOSE HACK SIMULATION
     ======================================================= */

  closeHack.addEventListener(
    "click",
    closeHackSimulation
  );


  function closeHackSimulation(){

    hackModal.classList.remove(
      "active"
    );

    body.classList.remove(
      "danger"
    );

    body.style.transform = "";

    if(dangerToggle){

      const span =
        dangerToggle.querySelector("span");

      if(span){
        span.textContent = "● OFF";
      }

    }

    showToast(
      "SIMULATION TERMINATED // DEVICE SECURE"
    );

  }


  /* =======================================================
     ESCAPE CLOSE
     ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if(event.key === "Escape"){

        if(
          hackModal.classList.contains(
            "active"
          )
        ){

          closeHackSimulation();

        }

      }

    }
  );


  /* =======================================================
     TERMINAL
     ======================================================= */

  const commands = {

    help: [
      "AVAILABLE COMMANDS:",
      "about     - identity information",
      "skills    - technical stack",
      "projects  - project vault",
      "status    - system status",
      "contact   - secure channel",
      "clear     - clear terminal",
      "danger    - activate visual alert"
    ],

    about: [
      "USER: KRISHNA",
      "ROLE: DEVELOPER",
      "MODE: LEARN / BUILD",
      "STATUS: ONLINE"
    ],

    skills: [
      "HTML       [90%]",
      "CSS        [85%]",
      "JAVASCRIPT [80%]",
      "SQL        [70%]",
      "PYTHON     [70%]"
    ],

    projects: [
      "PROJECT VAULT",
      "MISSION_001 // CYBER PORTFOLIO",
      "MISSION_002 // WEB LAB",
      "MISSION_003 // DATA NODE"
    ],

    status: [
      "SYSTEM       : ONLINE",
      "NETWORK      : SECURE",
      "DATABASE     : ONLINE",
      "FIREWALL     : ACTIVE",
      "THREAT LEVEL : LOW",
      "UPTIME       : 99.9%"
    ],

    contact: [
      "SECURE CHANNEL READY.",
      "Use the CONTACT module below."
    ]

  };


  function printTerminal(
    text,
    className = ""
  ){

    const line =
      document.createElement("div");

    line.className =
      className;

    line.textContent =
      text;

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop =
      terminalOutput.scrollHeight;

  }


  function runCommand(command){

    const clean =
      command.trim().toLowerCase();

    if(!clean){
      return;
    }

    printTerminal(
      "> " + clean,
      "terminal-command"
    );

    if(clean === "clear"){

      terminalOutput.innerHTML = "";

      return;

    }

    if(clean === "danger"){

      body.classList.add("danger");

      dangerMode = true;

      dangerToggle
        .querySelector("span")
        .textContent = "● ON";

      printTerminal(
        "⚠ DANGER MODE ACTIVATED"
      );

      return;

    }

    if(clean === "hello" || clean === "hi"){

      printTerminal(
        "HELLO, USER // WELCOME TO KRISHNA.SYSTEM"
      );

      return;

    }

    if(clean === "whoami"){

      printTerminal(
        "KRISHNA // DEVELOPER NODE"
      );

      return;

    }

    if(commands[clean]){

      commands[clean].forEach(
        line => printTerminal(line)
      );

      return;

    }

    printTerminal(
      "COMMAND NOT FOUND // TYPE 'help'"
    );

  }


  terminalInput.addEventListener(
    "keydown",
    event => {

      if(event.key === "Enter"){

        runCommand(
          terminalInput.value
        );

        terminalInput.value = "";

      }

    }
  );


  /* =======================================================
     CONTACT FORM
     ======================================================= */

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const name =
        document.getElementById("name")
          .value
          .trim();

      const email =
        document.getElementById("email")
          .value
          .trim();

      const message =
        document.getElementById("message")
          .value
          .trim();

      if(
        !name ||
        !email ||
        !message
      ){

        showToast(
          "⚠ COMPLETE ALL FIELDS"
        );

        return;

      }

      showToast(
        "MESSAGE READY // FRONTEND SIMULATION"
      );

      contactForm.reset();

    }
  );


  /* =======================================================
     TOAST
     ======================================================= */

  let toastTimer;

  function showToast(message){

    if(!toast){
      return;
    }

    toast.textContent =
      message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
      setTimeout(() => {

        toast.classList.remove(
          "show"
        );

      },3000);

  }


  /* =======================================================
     MATRIX RAIN
     ======================================================= */

  const matrix =
    document.getElementById(
      "matrixCanvas"
    );

  const matrixCtx =
    matrix.getContext("2d");

  let matrixWidth;
  let matrixHeight;
  let matrixColumns;
  let matrixDrops;

  const matrixChars =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%{}[]<>/\\@";

  function resizeMatrix(){

    matrixWidth =
      matrix.width =
      window.innerWidth;

    matrixHeight =
      matrix.height =
      window.innerHeight;

    const fontSize = 14;

    matrixColumns =
      Math.floor(
        matrixWidth / fontSize
      );

    matrixDrops =
      Array(matrixColumns)
        .fill(1);

  }

  function drawMatrix(){

    matrixCtx.fillStyle =
      "rgba(0,0,0,.075)";

    matrixCtx.fillRect(
      0,
      0,
      matrixWidth,
      matrixHeight
    );

    const fontSize = 14;

    matrixCtx.font =
      fontSize + "px monospace";

    for(
      let i = 0;
      i < matrixDrops.length;
      i++
    ){

      const char =
        matrixChars[
          Math.floor(
            Math.random() *
            matrixChars.length
          )
        ];

      matrixCtx.fillStyle =
        body.classList.contains("danger")
          ? "rgba(255,20,60,.65)"
          : "rgba(29, 200, 97, 0.55)";

      matrixCtx.fillText(
        char,
        i * fontSize,
        matrixDrops[i] * fontSize
      );

      if(
        matrixDrops[i] * fontSize >
        matrixHeight &&
        Math.random() > .975
      ){

        matrixDrops[i] = 0;

      }

      matrixDrops[i]++;

    }

    requestAnimationFrame(
      drawMatrix
    );

  }

  resizeMatrix();
  drawMatrix();

  window.addEventListener(
    "resize",
    resizeMatrix
  );


  /* =======================================================
     PARTICLE NETWORK
     ======================================================= */

  const particle =
    document.getElementById(
      "particleCanvas"
    );

  const pctx =
    particle.getContext("2d");

  let particles = [];

  function resizeParticles(){

    particle.width =
      window.innerWidth;

    particle.height =
      window.innerHeight;

    createParticles();

  }


  function createParticles(){

    particles = [];

    const amount =
      window.innerWidth < 600
        ? 28
        : 55;

    for(
      let i = 0;
      i < amount;
      i++
    ){

      particles.push({

        x:
          Math.random() *
          particle.width,

        y:
          Math.random() *
          particle.height,

        vx:
          (Math.random()-.5)*.35,

        vy:
          (Math.random()-.5)*.35

      });

    }

  }


  function drawParticles(){

    pctx.clearRect(
      0,
      0,
      particle.width,
      particle.height
    );

    const danger =
      body.classList.contains(
        "danger"
      );

    const color =
      danger
        ? "255,20,60"
        : "0,255,102";

    particles.forEach(p => {

      p.x += p.vx;
      p.y += p.vy;

      if(
        p.x < 0 ||
        p.x > particle.width
      ){
        p.vx *= -1;
      }

      if(
        p.y < 0 ||
        p.y > particle.height
      ){
        p.vy *= -1;
      }

      pctx.fillStyle =
        `rgba(${color},.5)`;

      pctx.beginPath();

      pctx.arc(
        p.x,
        p.y,
        1.3,
        0,
        Math.PI*2
      );

      pctx.fill();

    });


    for(
      let i=0;
      i<particles.length;
      i++
    ){

      for(
        let j=i+1;
        j<particles.length;
        j++
      ){

        const a =
          particles[i];

        const b =
          particles[j];

        const dx =
          a.x-b.x;

        const dy =
          a.y-b.y;

        const distance =
          Math.sqrt(
            dx*dx+dy*dy
          );

        if(distance < 110){

          pctx.strokeStyle =
            `rgba(${color},${.12 -
              distance/1000})`;

          pctx.lineWidth = .5;

          pctx.beginPath();

          pctx.moveTo(
            a.x,
            a.y
          );

          pctx.lineTo(
            b.x,
            b.y
          );

          pctx.stroke();

        }

      }

    }

    requestAnimationFrame(
      drawParticles
    );

  }

  resizeParticles();
  drawParticles();

  window.addEventListener(
    "resize",
    resizeParticles
  );


  /* =======================================================
     MOUSE PARALLAX
     ======================================================= */

  if(window.innerWidth > 768){

    document.addEventListener(
      "mousemove",
      event => {

        const x =
          (event.clientX /
            window.innerWidth - .5);

        const y =
          (event.clientY /
            window.innerHeight - .5);

        const grid =
          document.querySelector(
            ".hero-grid"
          );

        if(grid){

          grid.style.transform =
            `translate(${x*12}px,${y*12}px)`;

        }

      }
    );

  }


  /* =======================================================
     KEYBOARD SHORTCUT
     ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if(
        event.key.toLowerCase() === "d" &&
        event.target.tagName !== "INPUT" &&
        event.target.tagName !== "TEXTAREA"
      ){

        dangerToggle.click();

      }

      if(
        event.key === "/" &&
        event.target.tagName !== "INPUT" &&
        event.target.tagName !== "TEXTAREA"
      ){

        event.preventDefault();

        terminalInput.focus();

      }

    }
  );


  /* =======================================================
     CONSOLE MESSAGE
     ======================================================= */

  console.log(
    "%c KRISHNA.SYSTEM ONLINE ",
    "background:#00ff66;color:#000;font-weight:bold;padding:8px"
  );

  console.log(
    "Visual simulation only. No real hacking functions."
  );

});
/* =========================================================
   KRISHNA // LIVE CODE RAIN BACKGROUND
   Paste at the VERY END of script.js
   Visual effect only — no real hacking/network activity.
   ========================================================= */

(function () {

  const old = document.getElementById("krishnaCodeRain");

  if (old) old.remove();

  const canvas = document.createElement("canvas");

  canvas.id = "krishnaCodeRain";

  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");

  if (!ctx) return;


  /* ---------------------------------------------------------
     CANVAS STYLE
     --------------------------------------------------------- */

  Object.assign(canvas.style, {
    position: "fixed",
    inset: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "-2",
    opacity: "0.32"
  });


  /* ---------------------------------------------------------
     CODE CHARACTERS
     --------------------------------------------------------- */

  const chars =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" +
    "{}[]<>/\\|=+-_*#$%&@!?;:().";

  let width = window.innerWidth;
  let height = window.innerHeight;

  let fontSize = 15;
  let columns = 0;
  let drops = [];

  let animationId = null;

  let lastFrame = 0;

  const FPS = 30;
  const frameTime = 1000 / FPS;


  /* ---------------------------------------------------------
     RESIZE
     --------------------------------------------------------- */

  function resize() {

    width = window.innerWidth;
    height = window.innerHeight;

    const ratio = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );


    /* Smaller characters on mobile */

    fontSize =
      width < 600
        ? 11
        : width < 1000
          ? 13
          : 15;


    columns =
      Math.ceil(width / fontSize);


    drops = [];

    for (let i = 0; i < columns; i++) {

      drops[i] =
        Math.random() *
        -height /
        fontSize;

    }

  }


  /* ---------------------------------------------------------
     RANDOM CHARACTER
     --------------------------------------------------------- */

  function randomChar() {

    return chars[
      Math.floor(
        Math.random() * chars.length
      )
    ];

  }


  /* ---------------------------------------------------------
     DRAW
     --------------------------------------------------------- */

  function draw(timestamp) {

    if (
      timestamp - lastFrame <
      frameTime
    ) {

      animationId =
        requestAnimationFrame(draw);

      return;

    }

    lastFrame = timestamp;


    /* Fade previous frame */

    ctx.fillStyle =
      "rgba(1,3,2,0.075)";

    ctx.fillRect(
      0,
      0,
      width,
      height
    );


    /* Detect Danger Mode */

    const danger =
      document.body.classList.contains(
        "danger"
      );


    /* Green normal / red danger */

    const mainColor =
      danger
        ? "rgba(255,23,68,0.75)"
        : "rgba(0,255,102,0.65)";

    const brightColor =
      danger
        ? "rgba(255,80,105,0.95)"
        : "rgba(145,255,180,0.95)";


    ctx.font =
      fontSize +
      "px Courier New, monospace";


    for (
      let i = 0;
      i < columns;
      i++
    ) {

      const x =
        i * fontSize;

      const y =
        drops[i] * fontSize;


      /* Random code */

      const character =
        randomChar();


      /*
        Random brightness:
        most characters dim,
        some characters bright.
      */

      if (
        Math.random() > 0.93
      ) {

        ctx.fillStyle =
          brightColor;

      } else {

        ctx.fillStyle =
          mainColor;

      }


      ctx.fillText(
        character,
        x,
        y
      );


      /* Add occasional second character */

      if (
        Math.random() > 0.94
      ) {

        ctx.fillStyle =
          mainColor;

        ctx.fillText(
          randomChar(),
          x,
          y + fontSize
        );

      }


      /*
        Reset column after it reaches bottom.
      */

      if (
        y > height &&
        Math.random() > 0.975
      ) {

        drops[i] =
          Math.random() *
          -30;

      }


      /*
        Different speeds make the background
        look less robotic.
      */

      const speed =
        Math.random() > 0.92
          ? 1.8
          : 1;


      drops[i] += speed;

    }


    animationId =
      requestAnimationFrame(draw);

  }


  /* ---------------------------------------------------------
     MOUSE PARALLAX
     --------------------------------------------------------- */

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener(
    "mousemove",
    function (event) {

      mouseX =
        (event.clientX / width - 0.5);

      mouseY =
        (event.clientY / height - 0.5);

      /*
        Very subtle movement.
        Does not interfere with the page.
      */

      canvas.style.transform =
        "translate(" +
        (mouseX * 8) +
        "px," +
        (mouseY * 8) +
        "px)";

    },
    {
      passive: true
    }
  );


  /* ---------------------------------------------------------
     RESIZE LISTENER
     --------------------------------------------------------- */

  window.addEventListener(
    "resize",
    resize
  );


  /* ---------------------------------------------------------
     START
     --------------------------------------------------------- */

  resize();

  ctx.fillStyle =
    "#010302";

  ctx.fillRect(
    0,
    0,
    width,
    height
  );

  animationId =
    requestAnimationFrame(draw);


  /* ---------------------------------------------------------
     CLEANUP
     --------------------------------------------------------- */

  window.addEventListener(
    "beforeunload",
    function () {

      if (animationId) {

        cancelAnimationFrame(
          animationId
        );

      }

    }
  );

})();
/* =========================================================
   KRISHNA // AUTO NAVIGATION FIX
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll(
    ".nav a, nav a"
  );

  const isInsidePages =
    window.location.pathname.includes("/pages/");

  navLinks.forEach(link => {

    const name =
      link.textContent
        .trim()
        .toUpperCase();

    if (name === "HOME") {

      link.href = isInsidePages
        ? "../index.html"
        : "index.html";

    }

    else if (name === "ABOUT") {

      link.href = isInsidePages
        ? "about.html"
        : "pages/about.html";

    }

    else if (name === "SKILLS") {

      link.href = isInsidePages
        ? "skills.html"
        : "pages/skills.html";

    }

    else if (name === "PROJECTS") {

      link.href = isInsidePages
        ? "projects.html"
        : "pages/projects.html";

    }

    else if (name === "TERMINAL") {

      link.href = isInsidePages
        ? "terminal.html"
        : "pages/terminal.html";

    }

    else if (name === "CONTACT") {

      link.href = isInsidePages
        ? "contact.html"
        : "pages/contact.html";

    }

  });

});
/* =========================================================
   HOMEPAGE MODULE CARDS — CLICK TO OPEN PAGES
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".module-card").forEach(function (card) {

    const title = card.textContent.trim().toUpperCase();

    let page = "";

    if (title.includes("ABOUT")) {
      page = "pages/about.html";
    }

    else if (title.includes("SKILLS")) {
      page = "pages/skills.html";
    }

    else if (title.includes("PROJECTS")) {
      page = "pages/projects.html";
    }

    else if (title.includes("TERMINAL")) {
      page = "pages/terminal.html";
    }

    else if (title.includes("CONTACT")) {
      page = "pages/contact.html";
    }

    if (!page) return;

    card.style.cursor = "pointer";

    card.addEventListener("click", function (event) {

      /* Button/link ko bhi same page par jaane do */
      if (event.target.closest("a")) return;

      window.location.href = page;

    });

  });

});
/* =========================================================
   KRISHNA PROJECTS // HERO TITLE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const projectHero = document.querySelector("#projectHero");

  if (!projectHero) return;

  const title = projectHero.querySelector(".welcome-title");

  if (title) {
    title.textContent = "WELCOME TO KRISHNA PROJECTS";
  }

});
/* =========================================================
   KRISHNA // PROJECT CARDS — FORCE CLICK
   ========================================================= */

document.addEventListener("click", function (e) {

  const card = e.target.closest(".project-card");

  if (!card) return;

  const cards = Array.from(
    document.querySelectorAll(".project-card")
  );

  const number = cards.indexOf(card);

  if (number === 0) {

    window.location.href = "../index.html";

  }

  else if (number === 1) {

    window.location.href = "terminal.html";

  }

  else if (number === 2) {

    window.location.href = "skills.html";

  }

}, true);


/* Make every project card look clickable */

document.addEventListener("DOMContentLoaded", function () {

  document
    .querySelectorAll(".project-card")
    .forEach(function (card) {

      card.style.cursor = "pointer";

      card.setAttribute(
        "role",
        "link"
      );

      card.setAttribute(
        "tabindex",
        "0"
      );

    });

});
