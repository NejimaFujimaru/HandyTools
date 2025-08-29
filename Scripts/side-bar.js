// Variables
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('dark-overlay');
const sidebarToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');


// Function to open sidebar + show overlay
function openSidebar() {
  sidebar.classList.add('active');
  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 10);
}


// Function to close sidebar + hide overlay
function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300); // matches CSS transition time
}

// Toggle sidebar
sidebarToggle.addEventListener('click', () => {
  openSidebar();
});

// Close sidebar with the X button
closeBtn.addEventListener('click', () => {
  closeSidebar();
});

// Close sidebar when clicking outside (on overlay)
overlay.addEventListener('click', () => {
  closeSidebar();
});
