window.addEventListener('load', () => {
  const maxScrollX = document.documentElement.scrollWidth - window.innerWidth;
  const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

  // Start centered
  window.scrollTo(maxScrollX / 2, maxScrollY / 2);

  let targetX = maxScrollX / 2;
  let targetY = maxScrollY / 2;

  // How fast to move (tweak for sensitivity)
  const speed = 0.02;

  window.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Get distance of mouse from center, normalized between -1 and 1
    const moveX = (e.clientX - centerX) / centerX;
    const moveY = (e.clientY - centerY) / centerY;

    // Map mouse movement to target scroll positions (clamped)
    targetX = Math.min(maxScrollX, Math.max(0, maxScrollX / 2 + moveX * (maxScrollX / 2)));
    targetY = Math.min(maxScrollY, Math.max(0, maxScrollY / 2 + moveY * (maxScrollY / 2)));
  });

  function smoothScroll() {
    const currentX = window.scrollX;
    const currentY = window.scrollY;

    // Move current scroll a bit toward the target
    const newX = currentX + (targetX - currentX) * speed;
    const newY = currentY + (targetY - currentY) * speed;

    window.scrollTo(newX, newY);

    requestAnimationFrame(smoothScroll);
  }

  smoothScroll();
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
  
  const aboutLink = document.getElementById('aboutLink');
  const contactLink = document.getElementById('contactLink');
    const exhibLink = document.getElementById('exhibLink');

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    windowDiv.innerHTML = `
      <div class="event-content">
  <img height= "600px" class="about-content" id="img-about"  src="images/about_1.jpeg" >
        <p class="about-content" >My art arises from the acts of painting, sculpture, world-building, and the conscious combining
of collected found objects. I mainly work intuitively and start out from a material or a simple
subject, like a skull or campfire. As I work, my art starts to create their own mythology. This means
that my work inspires me to write stories about them. This is often where the title comes from.
Archaeology, anatomy, the surrealistic, and the fantastical inspire me a lot, and through me my
work and my worlds.

</p>
<p class="about-content" >Lately, I’ve been noticing how many of my fascinations in life are all linked to that what
sets us as human beings apart from other animals. I have been seeing this in my work as
well. And so, my research has started on the beauty of the human that just is. To see and
admire this through the eyes of an outsider. (June 2025)

</p>


      </div>
    `;
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    windowDiv.innerHTML = `
      <div class=" event-content contact-content">
        <h1>Esra van den Berg</h1>
        <p>Email: esravandenberg2k@gmail.com  </p>
        <p>Instagram: <a target= '_blank'href='https://www.instagram.com/astra2k'> @astra2k </a> </p>
      </div>
    `;
  });


exhibLink.addEventListener('click', (e) => {
    e.preventDefault();
    windowDiv.innerHTML = `
      <div class="event-content ">
              <h1>Esra van den Berg</h1>
      <section class="exhib-content">

        <h3>Graduation Show</h3>
        <p> Pak Me Dan 2025</p>
        <p1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra sodales faucibus. Maecenas aliquam neque in lorem interdum aliquet. Phasellus efficitur lorem vel lacus feugiat aliquam. Cras posuere felis nec augue egestas, sed euismod lacus volutpat. Etiam ac erat nec ante vestibulum varius in dapibus odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus orci ante, gravida a bibendum et, posuere eu libero. Integer auctor bibendum felis vitae porta. Vivamus blandit dignissim ante vitae pharetra. Ut dictum, lectus volutpat dapibus posuere, felis arcu pulvinar nisi, ac pharetra sapien erat et arcu. Pellentesque volutpat diam a nisl mollis fringilla.</p1>

          <img id="img-exh" onclick="location.href='Graduation_Show/'; " height= "250px"   src="images/keuze_1.jpg" >
    </section>
      </div>
    `;
  });
});



//Source - https://stackoverflow.com/a
//Posted by sanoj lawrence
//Retrieved 2025-12-04, License - CC BY-SA 3.0



      if(history.replaceState) history.replaceState({}, "", "/");
function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

if (isMobile()) {
  console.log("Mobile device detected");
} else {
  console.log("Desktop device detected");
}