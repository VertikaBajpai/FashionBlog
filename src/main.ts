import './style.css';

// ============================================
// THE BAG EDIT — Main Application Script
// ============================================

// ---- Glossary Data ----
const glossaryData = [
  { term: 'Reticule', def: 'A small, ornamental handbag with a drawstring, carried by women from the late 18th century. The original fashion handbag.' },
  { term: 'Silhouette', def: 'The overall shape or outline of a bag\'s design. It defines the bag\'s visual identity and category.' },
  { term: 'Utility', def: 'The practical functionality of a bag — its capacity, compartments, and everyday usability.' },
  { term: 'Aesthetic', def: 'The visual and artistic character of a design. A bag\'s aesthetic reflects its era, culture, and designer\'s vision.' },
  { term: 'Grain', def: 'The natural surface texture of leather. Full-grain retains the original surface, while top-grain is lightly sanded for uniformity.' },
  { term: 'Texture', def: 'The tactile quality of a material — how it feels to the touch. Embossing, quilting, and weaving all create distinctive textures.' },
  { term: 'Lining', def: 'The interior fabric of a bag. Premium bags use suede, cotton, or microfiber linings, often in signature colours or patterns.' },
  { term: 'Gusset', def: 'The expandable side panel of a bag that determines its depth and capacity. Wider gussets allow more storage.' },
  { term: 'Hardware', def: 'The metal components — clasps, buckles, zippers, studs, and feet. Gold, silver, palladium, and brushed brass each create a different aesthetic.' },
  { term: 'Topstitching', def: 'The visible decorative stitching on the surface of a bag. Quality topstitching is even, consistent, and a hallmark of fine craftsmanship.' },
  { term: 'Patina', def: 'The natural aging and darkening of untreated leather over time, considered a sign of quality and character.' },
  { term: 'Calfskin', def: 'Soft, fine-grained leather made from the hide of a young cow. Prized for its smooth texture and durability.' },
  { term: 'Cannage', def: 'A quilting pattern inspired by the rattan chairs used at Dior fashion shows. The signature pattern of the Lady Dior bag.' },
  { term: 'Intrecciato', def: 'Bottega Veneta\'s signature woven leather technique, where strips of leather are interlaced by hand.' },
  { term: 'Vachetta', def: 'Untreated, natural cowhide leather that develops a rich patina over time. Used as trim on many luxury bags.' },
  { term: 'Clochette', def: 'A small leather sheath that holds the keys to a bag\'s lock, typically hung from the handle.' },
  { term: 'Monogram', def: 'A design consisting of combined initials or a distinctive pattern used as a brand identifier.' },
  { term: 'Embossing', def: 'A technique of pressing patterns or textures into leather to create a raised or textured surface.' },
  { term: 'Zardozi', def: 'An elaborate form of Indian embroidery using gold and silver threads, beads, and sequins on fabric.' },
  { term: 'Appliqué', def: 'A decorative technique where fabric pieces are stitched onto a larger piece to form patterns or pictures.' },
];

// ---- Search Data ----
const searchData = [
  { title: 'Once Upon a Bag — History & Evolution', section: 'History', href: '#history' },
  { title: 'Reticule — The First Fashion Handbag', section: 'History', href: '#history' },
  { title: 'The Bag Dictionary — Types & Silhouettes', section: 'Dictionary', href: '#dictionary' },
  { title: 'Tote Bag — The Ultimate Carry-All', section: 'Dictionary', href: '#bag-tote' },
  { title: 'Shoulder Bag — The Hands-Free Classic', section: 'Dictionary', href: '#bag-shoulder' },
  { title: 'Sling Bag — The Modern Explorer', section: 'Dictionary', href: '#bag-sling' },
  { title: 'Clutch — Evening Glamour', section: 'Dictionary', href: '#bag-clutch' },
  { title: 'Hobo Bag — The Free-Spirited Slouch', section: 'Dictionary', href: '#bag-hobo' },
  { title: 'Satchel — The Heritage Classic', section: 'Dictionary', href: '#bag-satchel' },
  { title: 'Bucket Bag — The Relaxed Sophisticate', section: 'Dictionary', href: '#bag-bucket' },
  { title: 'Mini Bag — The Tiny Statement', section: 'Dictionary', href: '#bag-mini' },
  { title: 'Baguette Bag — The It-Girl Essential', section: 'Dictionary', href: '#bag-baguette' },
  { title: 'Crossbody Bag — The Urban Explorer', section: 'Dictionary', href: '#bag-crossbody' },
  { title: 'The Brands Behind the Bags', section: 'Brands', href: '#brands' },
  { title: 'Chanel — Quilted Elegance', section: 'Brands', href: '#brands' },
  { title: 'Hermès — Pinnacle of Craftsmanship', section: 'Brands', href: '#brands' },
  { title: 'Louis Vuitton — Heritage & Monogram', section: 'Brands', href: '#brands' },
  { title: 'Gucci — Italian Glamour', section: 'Brands', href: '#brands' },
  { title: 'Prada — Intellectual Fashion', section: 'Brands', href: '#brands' },
  { title: 'Dior — Parisian Haute Couture', section: 'Brands', href: '#brands' },
  { title: 'Fendi — Roman Innovation', section: 'Brands', href: '#brands' },
  { title: 'Bottega Veneta — Intrecciato Weave', section: 'Brands', href: '#brands' },
  { title: 'Coach — American Heritage', section: 'Brands', href: '#brands' },
  { title: 'Saint Laurent — Rock-Chic Luxury', section: 'Brands', href: '#brands' },
  { title: 'Desi Craft — Indian Bags & Designers', section: 'Indian', href: '#indian' },
  { title: 'Sabyasachi — Heritage Luxury', section: 'Indian', href: '#indian' },
  { title: 'Hidesign — Eco-Luxury Leather', section: 'Indian', href: '#indian' },
  { title: 'Nappa Dori — Modern Indian Design', section: 'Indian', href: '#indian' },
  { title: 'Da Milano — Italian-Indian Fusion', section: 'Indian', href: '#indian' },
  { title: 'Potli — Traditional Indian Drawstring Bag', section: 'Indian', href: '#indian' },
  { title: 'Batwa — Ornate Indian Pouch', section: 'Indian', href: '#indian' },
  { title: 'The Bag Consumer — Style Profiles', section: 'Consumer', href: '#consumer' },
  { title: 'The Practical Shopper', section: 'Consumer', href: '#consumer' },
  { title: 'The Fashion Enthusiast', section: 'Consumer', href: '#consumer' },
  { title: 'The Luxury Collector', section: 'Consumer', href: '#consumer' },
  { title: 'The Minimalist Consumer', section: 'Consumer', href: '#consumer' },
  { title: 'The Trendsetter', section: 'Consumer', href: '#consumer' },
  { title: 'The Student Consumer', section: 'Consumer', href: '#consumer' },
  { title: 'If Bags Were Personalities', section: 'Special', href: '#personalities' },
  { title: 'Every Bag Tells a Story — Finale', section: 'Finale', href: '#finale' },
];

// ---- Initialization ----
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavigation();
  initSearch();
  initBackToTop();
  initSocialSidebar();
  initScrollAnimations();
  initGlossary();
  initSmoothScrolling();
  initImageFallbacks();
});

// ---- Loader ----
function initLoader() {
  const loader = document.getElementById('loader') as HTMLElement;
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      // Remove from DOM after transition
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);
    }, 2200);
  });

  // Failsafe: remove loader after 4 seconds regardless
  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600);
  }, 4000);
}

// ---- Navigation ----
function initNavigation() {
  const nav = document.getElementById('main-nav') as HTMLElement;
  const navToggle = document.getElementById('nav-toggle') as HTMLElement;
  const navLinks = document.getElementById('nav-links') as HTMLElement;
  const links = navLinks?.querySelectorAll('a');

  if (!nav || !navToggle || !navLinks) return;

  // Scroll-based nav styling
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

  

    // Update active link
    updateActiveNavLink();
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  links?.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let currentSection = '';

  sections.forEach(section => {
    const sectionEl = section as HTMLElement;
    const sectionTop = sectionEl.offsetTop - 150;
    const sectionHeight = sectionEl.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = sectionEl.getAttribute('id') || '';
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ---- Search ----
function initSearch() {
  const searchBtn = document.getElementById('nav-search-btn') as HTMLElement;
  const searchOverlay = document.getElementById('search-overlay') as HTMLElement;
  const searchClose = document.getElementById('search-close') as HTMLElement;
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const searchResults = document.getElementById('search-results') as HTMLElement;

  if (!searchBtn || !searchOverlay || !searchClose || !searchInput || !searchResults) return;

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 300);
  });

  searchClose.addEventListener('click', closeSearch);

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
    // Ctrl/Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput.focus(), 300);
    }
  });

  function closeSearch() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
  }

  // Search functionality
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query.length < 2) return;

    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.section.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-result-item">
          <span style="color: rgba(245,240,232,0.4); font-style: italic;">No results found for "${query}"</span>
        </div>
      `;
      return;
    }

    results.forEach(result => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div class="search-result-section">${result.section}</div>
        <a href="${result.href}" onclick="document.getElementById('search-overlay').classList.remove('active'); document.body.style.overflow = '';">${highlightMatch(result.title, query)}</a>
      `;
      searchResults.appendChild(item);
    });
  });

  function highlightMatch(text: string, query: string): string {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<strong style="color: #C4A265;">$1</strong>');
  }
}

// ---- Back to Top ----
function initBackToTop() {
  const btn = document.getElementById('back-to-top') as HTMLElement;
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Social Sidebar ----
function initSocialSidebar() {
  const sidebar = document.getElementById('social-sidebar') as HTMLElement;
  if (!sidebar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
      sidebar.classList.add('visible');
    } else {
      sidebar.classList.remove('visible');
    }
  });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all elements
    animatedElements.forEach(el => el.classList.add('animated'));
  }
}

// ---- Glossary ----
function initGlossary() {
  const modal = document.getElementById('glossary-modal') as HTMLElement;
  const closeBtn = document.getElementById('glossary-close') as HTMLElement;
  const glossaryList = document.getElementById('glossary-list') as HTMLElement;

  if (!modal || !closeBtn || !glossaryList) return;

  // Populate glossary
  glossaryData
    .sort((a, b) => a.term.localeCompare(b.term))
    .forEach(item => {
      const div = document.createElement('div');
      div.className = 'glossary-item';
      div.innerHTML = `
        <div class="glossary-item-term">${item.term}</div>
        <div class="glossary-item-def">${item.def}</div>
      `;
      glossaryList.appendChild(div);
    });

  // Make vocab terms clickable to open glossary
  document.querySelectorAll('.vocab-term').forEach(termEl => {
    (termEl as HTMLElement).style.cursor = 'pointer';
    termEl.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Scroll to the matching term in the glossary
      const termText = termEl.textContent?.trim();
      if (termText) {
        setTimeout(() => {
          const matchingItem = Array.from(glossaryList.querySelectorAll('.glossary-item-term'))
            .find(el => el.textContent?.trim() === termText);
          if (matchingItem) {
            matchingItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            (matchingItem as HTMLElement).style.color = '#C4A265';
            setTimeout(() => {
              (matchingItem as HTMLElement).style.color = '';
            }, 2000);
          }
        }, 300);
      }
    });
  });

  closeBtn.addEventListener('click', closeGlossary);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeGlossary();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeGlossary();
    }
  });

  function closeGlossary() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ---- Smooth Scrolling ----
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = (anchor as HTMLAnchorElement).getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const targetEl = target as HTMLElement;
        const navHeight = 72;
        const targetPosition = targetEl.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Update URL hash without jumping
        history.pushState(null, '', href);
      }
    });
  });
}

// ---- Image Fallbacks ----
function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function (this: HTMLImageElement) {
      // Create a beautiful gradient placeholder
      const wrapper = this.parentElement;
      if (!wrapper) return;

      this.style.display = 'none';

      // Check if placeholder already exists
      if (wrapper.querySelector('.img-placeholder')) return;

      const placeholder = document.createElement('div');
      placeholder.className = 'img-placeholder';
      placeholder.style.cssText = `
        width: 100%;
        height: 100%;
        min-height: 250px;
        background: linear-gradient(135deg, #D4B896 0%, #F5F0E8 30%, #D4B896 60%, #B5838D 100%);
        background-size: 200% 200%;
        animation: shimmer 4s ease-in-out infinite;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      `;

      const icon = document.createElement('div');
      icon.style.cssText = `
        font-size: 2rem;
        opacity: 0.3;
        color: #3C2415;
      `;
      icon.innerHTML = '👜';
      placeholder.appendChild(icon);

      wrapper.appendChild(placeholder);
    });
  });

  // Add shimmer keyframe if not exists
  if (!document.querySelector('#shimmer-style')) {
    const style = document.createElement('style');
    style.id = 'shimmer-style';
    style.textContent = `
      @keyframes shimmer {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `;
    document.head.appendChild(style);
  }
}
