document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  if (!hamburger || !mobileMenu) {
    console.log("Mobile menu elements not found:", { hamburger: !!hamburger, mobileMenu: !!mobileMenu });
    return;
  }

  function openMenu() {
    console.log("Opening menu");
    mobileMenu.classList.add("active");
    hamburger.classList.add("active");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    console.log("Closing menu");
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = mobileMenu.classList.contains("active");
    console.log("Hamburger clicked, menu open:", isOpen);

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close button (X)
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close when clicking background ONLY
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });

  // Close on link click
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Reset on desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
