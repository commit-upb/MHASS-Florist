/**
 * MHAS FLORIST - NAVBAR INTERACTIVE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements Selection
  const announcementBar = document.getElementById('announcementBar');
  const closeAnnouncementBtn = document.getElementById('closeAnnouncement');
  const headerWrapper = document.getElementById('headerWrapper');
  const hamburgerToggle = document.getElementById('hamburgerToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const closeDrawerBtn = document.getElementById('closeDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');

  // 1. Close Announcement Bar
  if (closeAnnouncementBtn && announcementBar) {
    closeAnnouncementBtn.addEventListener('click', () => {
      announcementBar.classList.add('hidden');
    });
  }

  // 2. Sticky Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerWrapper.classList.add('scrolled');
    } else {
      headerWrapper.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Drawer Functions
  function openMobileDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    hamburgerToggle.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    hamburgerToggle.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scrolling
  }

  if (hamburgerToggle) {
    hamburgerToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeMobileDrawer);
  }

  // 4. Highlight Active Link on Click
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Close drawer if link inside mobile drawer clicked
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      }
    });
  });

  // 5. Category Tabs Interaction
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // 6. Add to Cart Interactivity & Counter Upgrade
  const cartBtns = document.querySelectorAll('.btn-add-cart');
  const cartBadge = document.querySelector('.action-icon-btn[title="Keranjang Belanja"] .counter-badge');
  let cartCount = 2;

  cartBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      cartCount++;
      if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
          cartBadge.style.transform = 'scale(1)';
        }, 200);
      }
      
      const originalText = this.textContent;
      this.textContent = '✓ Ditambahkan';
      this.style.backgroundColor = 'var(--primary)';
      this.style.color = '#fff';

      setTimeout(() => {
        this.textContent = originalText;
        this.style.backgroundColor = '';
        this.style.color = '';
      }, 1500);
    });
  });
});

