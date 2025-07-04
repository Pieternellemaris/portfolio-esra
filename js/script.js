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
  const clickedCategory = button.id;
  const clickedItems = document.querySelectorAll('.' + clickedCategory);
  const clickedButton = document.getElementById(clickedCategory);

  // Check if clicked category is visible
  const isVisible = Array.from(clickedItems).some(item => !item.classList.contains('hidden'));

  if (isVisible) {
    clickedItems.forEach(item => item.classList.add('hidden'));
    clickedButton.classList.remove('active');
  } else {
    clickedItems.forEach(item => item.classList.remove('hidden'));
    clickedButton.classList.add('active');
  }

  // Check if all categories are hidden
  const allHidden = categories.every(cat => {
    const items = document.querySelectorAll('.' + cat);
    return Array.from(items).every(item => item.classList.contains('hidden'));
  });

  // If all hidden, reset to show all and activate buttons
  if (allHidden) {
    categories.forEach(cat => {
      const items = document.querySelectorAll('.' + cat);
      const btn = document.getElementById(cat);
      items.forEach(item => item.classList.remove('hidden'));
      btn.classList.add('active');
    });
  }
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
  
        <p class="about-content" >My art arises from the acts of painting, sculpture, world-building, and the conscious combining of collected found objects. I mainly work intuitively and start out from a material or a simple subject, like a skull or campfire. As I work, my art starts to create their own mythology. This means that my work inspires me to write stories about them. This is often where the title comes from. Archaeology, anatomy, the surrealistic, and the fantastical inspire me a lot, and through me my work and my worlds.
</p>
<p class="about-content" >Lately, I’ve been noticing how many my fascinations in life are all linked to that what sets us as human beings apart from other animals. I have been seeing this in my work as well. And so, my research has started on the beauty of the human that just is. To see and admire this through the eyes of an outsider. (June 2025)
</p>
      </div>
    `;
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    windowDiv.innerHTML = `
      <div class=" event-content contact-content">
        <h1>Esra van den Berg</h1>
        <p>Email: esravandenberg2k@example.com</p>
        <p>Instagram: @astra2k</p>
      </div>
    `;
  });


exhibLink.addEventListener('click', (e) => {
    e.preventDefault();
    windowDiv.innerHTML = `
      <div class="event-content exhib-content">
        <h1>Esra van den Berg</h1>
        <p>Graduation</p>
        <p></p>
      </div>
    `;
  });
});