// ── DATA ──
  const destinations = {
    bali: {
      title: 'Bali Island Bliss – 7 Days',
      meta: '📍 Bali, Indonesia · ★ 4.9 · From $899/person',
      desc: 'Immerse yourself in Bali\'s breathtaking landscapes, ancient temples, lush rice terraces, and pristine beaches. This 7-day itinerary covers Ubud, Seminyak, and Uluwatu with luxury accommodation, cultural experiences, and expert local guides.',
      img: 'images/destinations/bali.jpg'
    },
    paris: {
      title: 'Paris Romantic Getaway – 5 Days',
      meta: '📍 Paris, France · ★ 4.8 · From $1,299/person',
      desc: 'Walk cobbled streets hand-in-hand, cruise the Seine at twilight, and dine in intimate bistros. This curated Paris package includes skip-the-line access to the Eiffel Tower, Louvre, and Versailles.',
      img: 'images/destinations/paris.jpg'
    },
    maldives: {
      title: 'Maldives Overwater Villa – 6 Days',
      meta: '📍 Maldives · ★ 5.0 · From $2,499/person',
      desc: 'Float above the clearest waters on Earth in a private overwater villa. Snorkel among vibrant coral reefs, enjoy sunset dolphin cruises, and indulge in world-class spa treatments.',
      img: 'images/destinations/maldives.jpg'
    },
    santorini: {
      title: 'Santorini Sunset Escape – 8 Days',
      meta: '📍 Santorini, Greece · ★ 4.9 · From $1,599/person',
      desc: 'Experience the iconic blue-domed churches, volcanic beaches, and legendary sunsets of Santorini. Includes wine tasting tours, sailing trips around the caldera, and fine dining at clifftop restaurants.',
      img: 'images/destinations/santorini.jpg'
    },
    tokyo: {
      title: 'Tokyo Sakura Explorer – 10 Days',
      meta: '📍 Tokyo, Japan · ★ 4.8 · From $1,199/person',
      desc: 'Experience the dazzling contrast of ultra-modern Tokyo and ancient Japanese culture. Visit Shibuya, Asakusa, Kyoto temples, and Mount Fuji with a JR Rail Pass for unlimited exploration.',
      img: 'images/destinations/tokyo.jpg'
    },
    amalfi: {
      title: 'Amalfi Coastal Drive – 7 Days',
      meta: '📍 Amalfi Coast, Italy · ★ 4.9 · From $1,799/person',
      desc: 'Wind along one of the world\'s most dramatic coastlines through Positano, Ravello, and Amalfi. Enjoy fresh seafood, limoncello tastings, boat trips to sea caves, and charming hillside villages.',
      img: 'images/packages/amalfi-pkg.jpg'
    }
  };

  // ── NAVBAR SCROLL ──
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 60);

    const backTop = document.getElementById('back-top');
    backTop.classList.toggle('visible', window.scrollY > 400);
  });

  // ── HAMBURGER MENU ──
  // ── HAMBURGER MENU ──
  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    const body = document.body;
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close on nav link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close on overlay click (clicking outside menu items)
  document.getElementById('navLinks').addEventListener('click', function(e) {
    if (e.target === this) closeMenu();
  });

  // ── REVEAL ON SCROLL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── SEARCH ──
  function handleSearch() {
    const dest = document.getElementById('searchDest').value;
    const date = document.getElementById('searchDate').value;
    if (!dest && !date) {
      showToast('🔍 Please enter a destination or date to search');
      return;
    }
    showToast(`✈ Searching for trips${dest ? ' to ' + dest : ''}…`);
    setTimeout(() => {
      document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
    }, 700);
  }

  // ── HEART TOGGLE ──
  function toggleHeart(el) {
    el.classList.toggle('liked');
    showToast(el.classList.contains('liked') ? '❤ Added to Wishlist!' : '🤍 Removed from Wishlist');
  }

  function toggleWishlist(el) {
    el.classList.toggle('liked');
    const liked = el.classList.contains('liked');
    el.style.background = liked ? 'var(--terra)' : '';
    el.style.color = liked ? '#fff' : '';
    showToast(liked ? '❤ Added to Wishlist!' : '🤍 Removed from Wishlist');
  }

  // ── CATEGORY FILTER ──
  function filterCategory(el, type) {
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    showToast(`🗂 Showing ${type === 'all' ? 'all' : type} destinations`);
  }

  // ── MODAL ──
  function openModal(key) {
    const d = destinations[key];
    if (!d) return;
    document.getElementById('modalImg').src = d.img;
    document.getElementById('modalTitle').textContent = d.title;
    document.getElementById('modalMeta').textContent = d.meta;
    document.getElementById('modalDesc').textContent = d.desc;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(event) {
    if (event && event.target !== document.getElementById('modalOverlay') && !event.target.classList.contains('modal-close') && event.target.textContent !== '✕') return;
    if (!event) {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
      return;
    }
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  function bookNow() {
    closeModal();
    showToast('🎉 Redirecting to booking…');
    setTimeout(() => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }, 600);
  }

  // ── NEWSLETTER ──
  function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (!email || !email.includes('@')) {
      showToast('📧 Please enter a valid email address');
      return;
    }
    showToast('🎉 Subscribed! Welcome to TripTrails community!');
    document.getElementById('newsletterEmail').value = '';
  }

  // ── CONTACT FORM ──
  function submitContact() {
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('cemail').value;
    const dest = document.getElementById('cdestination').value;
    if (!fname || !email) {
      showToast('⚠ Please fill in required fields');
      return;
    }
    showToast('✅ Message sent! Our team will contact you within 24 hrs.');
    ['fname','lname','cemail','cdestination','cbudget','cmessage'].forEach(id => {
      document.getElementById(id).value = '';
    });
  }

  // ── TOAST ──
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  // ── KEYBOARD CLOSE MODAL ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }
  });