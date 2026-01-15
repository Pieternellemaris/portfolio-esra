window.addEventListener('load', () => {
  const root = document.scrollingElement || document.documentElement;

  let maxScrollX = 0;
  let maxScrollY = 0;
  let targetX = 0;
  let targetY = 0;

  const speed = 0.02;

  const isTouchDevice =
    matchMedia('(pointer: coarse)').matches ||
    navigator.maxTouchPoints > 0;

  // Recalculate scroll limits
  function updateBounds() {
    maxScrollX = root.scrollWidth - window.innerWidth;
    maxScrollY = root.scrollHeight - window.innerHeight;

    maxScrollX = Math.max(0, maxScrollX);
    maxScrollY = Math.max(0, maxScrollY);
  }

  // Center the page safely (mobile-friendly)
  function centerPage() {
    updateBounds();

    targetX = maxScrollX / 2;
    targetY = maxScrollY / 2;

    window.scrollTo({
      left: targetX,
      top: targetY,
      behavior: 'auto'
    });
  }

  // Wait for mobile layout to fully settle
  requestAnimationFrame(() => {
    setTimeout(centerPage, 120);
  });

  // Re-center on orientation change (important for Android)
  window.addEventListener('resize', () => {
    setTimeout(centerPage, 100);
  });

  // Desktop-only mouse movement
  if (!isTouchDevice) {
    window.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (e.clientX - centerX) / centerX;
      const moveY = (e.clientY - centerY) / centerY;

      targetX = Math.min(
        maxScrollX,
        Math.max(0, maxScrollX / 2 + moveX * (maxScrollX / 2))
      );

      targetY = Math.min(
        maxScrollY,
        Math.max(0, maxScrollY / 2 + moveY * (maxScrollY / 2))
      );
    });

    function smoothScroll() {
      const currentX = window.scrollX;
      const currentY = window.scrollY;

      window.scrollTo(
        currentX + (targetX - currentX) * speed,
        currentY + (targetY - currentY) * speed
      );

      requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
  }
});


function myDisapear(button) {
    const categories = ['schilderwerk', 'overig'];
    const clicked = button.id;

    console.log("Geklikt op:", clicked);

    // Check of knop al actief is
    const isActive = button.classList.contains("active");

    // ALS hij actief is → reset en toon alles
    if (isActive) {
        console.log("Knop was actief → reset");
        categories.forEach(cat => {
            document.querySelectorAll("." + cat).forEach(item => item.classList.remove("hidden"));
            document.getElementById(cat).classList.remove("active");
        });
        return;
    }

    // Stap 1: verberg alles en deactiveer knoppen
    categories.forEach(cat => {
        document.querySelectorAll("." + cat).forEach(item => item.classList.add("hidden"));
        document.getElementById(cat).classList.remove("active");
    });

    // Stap 2: toon alleen geklikte categorie
    document.querySelectorAll("." + clicked).forEach(item => item.classList.remove("hidden"));
    button.classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
  const windowDiv = document.getElementById('hoverBox');

  const $ = (id) => document.getElementById(id);
  const aboutLink = $('aboutLink');
  const contactLink = $('contactLink');
  const exhibLink = $('exhibLink');

  // ======== View functions ========
  function showAbout() {
    if (!windowDiv) return;
    windowDiv.innerHTML = `
      <div class="event-content">
        <img class="about-content" id="img-about" src="images/about_1.jpeg" alt="about">
        <p class="about-content">
          My art arises from the acts of painting, sculpture, world-building, and the conscious combining
          of collected found objects. I mainly work intuitively and start out from a material or a simple
          subject, like a skull or campfire. As I work, my art starts to create their own mythology. This means
          that my work inspires me to write stories about them. This is often where the title comes from.
          Archaeology, anatomy, the surrealistic, and the fantastical inspire me a lot, and through me my
          work and my worlds.
        </p>
        <p class="about-content">
          Lately, I’ve been noticing how many of my fascinations in life are all linked to that what
          sets us as human beings apart from other animals. I have been seeing this in my work as
          well. And so, my research has started on the beauty of the human that just is. To see and
          admire this through the eyes of an outsider. (June 2025)
        </p>
      </div>
    `;
  }

  function showContact() {
    if (!windowDiv) return;
    windowDiv.innerHTML = `
      <div class="event-content contact-content">
        <h1>Esra van den Berg</h1>
        <p>Email: esravandenberg2k@gmail.com</p>
        <p>Instagram: <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/astra2k">@astra2k</a></p>
      </div>
    `;
  }

  function showExhib() {
    if (!windowDiv) return;
    windowDiv.innerHTML = `
      <div class="event-content">
        <h1>Esra van den Berg</h1>
        <section class="exhib-content">
          <h3>Graduation Show</h3>
          <p>Pak Me Dan 2025</p>
          <p1>
            After four years, my time at the Institute of Arts in Maastricht came to an end. Our last assignment
            was to organize an exhibition and showcase our art pieces in a way that fit our art and helped tell
            the story. This page shows my result of this final assignment. I'd love to hear what story you see in this exhibition.
          </p1>
          <img id="img-exh" onclick="location.href='Graduation_Show/';" height="250px" src="images/keuze_1.jpg" alt="exhibition">
        </section>
      </div>
    `;
  }

  // ======== Attach click handlers on main page nav ========
  if (aboutLink) aboutLink.addEventListener('click', (e) => { e.preventDefault(); showAbout(); });
  if (contactLink) contactLink.addEventListener('click', (e) => { e.preventDefault(); showContact(); });
  if (exhibLink)  exhibLink.addEventListener('click', (e) => { e.preventDefault(); showExhib(); });

  // ======== Auto-load logic ========
  const params = new URLSearchParams(window.location.search);
  const viewParam = params.get('view');
  const hash = window.location.hash ? window.location.hash.replace('#','') : null;
  const stored = sessionStorage.getItem('autoView');

  const targetView = viewParam || hash || stored;

  if(targetView === 'about') showAbout();
  if(targetView === 'contact') showContact();
  if(targetView === 'exhib') showExhib();

  // clear sessionStorage after use
  if(stored) sessionStorage.removeItem('autoView');
});



//Source - https://stackoverflow.com/a
//Posted by sanoj lawrence
//Retrieved 2025-12-04, License - CC BY-SA 3.0



      if(history.replaceState) history.replaceState({}, "", "/");



function myFunction(x) {
  x.classList.toggle("change");
  const btn = document.getElementById("hiddenDrop");

  var btnDisplay = window.getComputedStyle(btn).getPropertyValue("display"); 
  if (x.classList.contains("change")) {
console.log('hi');
    btn.style.display="block"
  } else {
        btn.style.display="none"
    console.log('no')
  }
}