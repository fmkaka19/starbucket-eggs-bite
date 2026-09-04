/**
 * SAVORY TABLE — Interactive Application Script
 * Vanilla JavaScript (ES6+) for recipe management, live search, mobile menu, & newsletter validation.
 */

// ==========================================================================
// 1. Recipe Dataset (JavaScript Objects)
// ==========================================================================
const recipes = [
  {
    id: "starbucks-egg-bites",
    title: "Starbucks Egg Bites Recipe",
    slug: "starbucks-egg-bites",
    category: "Copycat Recipes",
    image: "assets/images/starbucks-egg-bites.jpg",
    description: "Learn how to make ultra-tender, velvety Starbucks-style egg bites at home with an easy oven-baked water bath technique.",
    prepTime: "10 min",
    cookTime: "20 min",
    totalTime: "30 min",
    servings: "6 bites",
    difficulty: "Easy",
    featured: true,
    popular: true,
    latest: true,
    keywords: ["starbucks egg bites recipe", "copycat egg bites", "bacon gruyere", "breakfast", "oven baked"]
  },
  {
    id: "cottage-cheese-egg-bites",
    title: "Cottage Cheese Egg Bites",
    slug: "cottage-cheese-egg-bites",
    category: "Breakfast",
    image: "assets/images/cottage-cheese-egg-bites.jpg",
    description: "Fluffy, protein-packed egg bites blended with cottage cheese, roasted red peppers, and fresh spinach.",
    prepTime: "10 min",
    cookTime: "22 min",
    totalTime: "32 min",
    servings: "6 bites",
    difficulty: "Easy",
    featured: false,
    popular: true,
    latest: true,
    keywords: ["cottage cheese egg bites", "high protein breakfast", "red pepper spinach", "meal prep"]
  },
  {
    id: "crispy-breakfast-potatoes",
    title: "Crispy Breakfast Potatoes",
    slug: "crispy-breakfast-potatoes",
    category: "Breakfast",
    image: "assets/images/crispy-breakfast-potatoes.jpg",
    description: "Skillet-roasted golden potatoes seasoned with smoked paprika, garlic, and fresh rosemary sprigs.",
    prepTime: "15 min",
    cookTime: "25 min",
    totalTime: "40 min",
    servings: "4 servings",
    difficulty: "Easy",
    featured: false,
    popular: true,
    latest: false,
    keywords: ["breakfast potatoes", "crispy skillet potatoes", "side dish", "hash browns"]
  },
  {
    id: "fluffy-pancakes",
    title: "Fluffy Breakfast Pancakes",
    slug: "fluffy-pancakes",
    category: "Breakfast",
    image: "assets/images/fluffy-pancakes.jpg",
    description: "Classic golden buttermilk pancakes served tall with real maple syrup and fresh berries.",
    prepTime: "10 min",
    cookTime: "15 min",
    totalTime: "25 min",
    servings: "4 servings",
    difficulty: "Easy",
    featured: false,
    popular: true,
    latest: true,
    keywords: ["fluffy pancakes", "buttermilk pancakes", "weekend breakfast", "maple syrup"]
  },
  {
    id: "blueberry-muffins",
    title: "Homemade Blueberry Muffins",
    slug: "blueberry-muffins",
    category: "Baking",
    image: "assets/images/blueberry-muffins.jpg",
    description: "Moist, bakery-style blueberry muffins topped with a sweet buttery streusel crumble.",
    prepTime: "15 min",
    cookTime: "22 min",
    totalTime: "37 min",
    servings: "12 muffins",
    difficulty: "Medium",
    featured: false,
    popular: true,
    latest: true,
    keywords: ["blueberry muffins", "streusel muffin", "baking", "breakfast pastry"]
  },
  {
    id: "chicken-alfredo",
    title: "Easy Chicken Alfredo",
    slug: "chicken-alfredo",
    category: "Dinner",
    image: "assets/images/chicken-alfredo.jpg",
    description: "Rich fettuccine pasta coated in a velvety garlic parmesan cream sauce with pan-seared chicken breast.",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: "35 min",
    servings: "4 servings",
    difficulty: "Easy",
    featured: false,
    popular: true,
    latest: true,
    keywords: ["chicken alfredo", "fettuccine pasta", "easy dinner", "30 minute meal"]
  }
];

// ==========================================================================
// 2. DOM Ready Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initLiveSearch();
  initNewsletterForm();
  renderPopularRecipes();
  renderLatestRecipes();
});

function getRecipeHref(slug) {
  if (slug === 'starbucks-egg-bites') return '#featured-recipe-heading';
  return '#popular-recipes';
}

function createRecipeCardHTML(recipe) {
  const targetHref = getRecipeHref(recipe.slug);
  return `
    <article class="recipe-card" data-id="${recipe.id}">
      <div class="recipe-card-image">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" width="400" height="300">
        <span class="recipe-card-category">${recipe.category}</span>
      </div>
      <div class="recipe-card-body">
        <h3 class="recipe-card-title">
          <a href="${targetHref}">${recipe.title}</a>
        </h3>
        <p class="recipe-card-desc">${recipe.description}</p>
        <div class="recipe-card-footer">
          <span class="recipe-time-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${recipe.totalTime}
          </span>
          <a href="${targetHref}" class="btn-link" aria-label="View ${recipe.title} recipe">View Recipe &rarr;</a>
        </div>
      </div>
    </article>
  `;
}

function renderPopularRecipes() {
  const container = document.getElementById('popular-recipes-grid');
  if (!container) return;

  const popularItems = recipes.filter(r => r.popular);
  container.innerHTML = popularItems.map(createRecipeCardHTML).join('');
}

function renderLatestRecipes() {
  const container = document.getElementById('latest-recipes-grid');
  if (!container) return;

  const latestItems = recipes.filter(r => r.latest);
  container.innerHTML = latestItems.map(createRecipeCardHTML).join('');
}

// ==========================================================================
// 4. Sticky Header Behavior
// ==========================================================================
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ==========================================================================
// 5. Accessible Mobile Navigation Drawer
// ==========================================================================
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('backdrop-overlay');

  if (!openBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    openBtn.setAttribute('aria-expanded', 'true');
    drawer.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    openBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    openBtn.focus();
  }

  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ==========================================================================
// 6. Live Recipe Search Modal
// ==========================================================================
function initLiveSearch() {
  const searchTriggers = document.querySelectorAll('.search-trigger');
  const searchModal = document.getElementById('search-modal');
  const searchCloseBtn = document.getElementById('search-modal-close');
  const searchInput = document.getElementById('search-input');
  const searchResultsArea = document.getElementById('search-results-area');
  const overlay = document.getElementById('backdrop-overlay');

  if (!searchModal || !searchInput || !searchResultsArea) return;

  function openSearchModal() {
    searchModal.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeSearchModal() {
    searchModal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResultsArea.innerHTML = '<div class="search-empty-state">Start typing to search for egg bites, breakfast ideas, and copycat recipes...</div>';
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearchModal));
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearchModal);

  // Live filter query matching
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
      searchResultsArea.innerHTML = '<div class="search-empty-state">Start typing to search for egg bites, breakfast ideas, and copycat recipes...</div>';
      return;
    }

    const matches = recipes.filter(r => 
      r.title.toLowerCase().includes(query) ||
      r.category.toLowerCase().includes(query) ||
      r.description.toLowerCase().includes(query) ||
      r.keywords.some(k => k.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
      searchResultsArea.innerHTML = `
        <div class="search-empty-state">
          <p>No recipes found matching "<strong>${escapeHTML(query)}</strong>"</p>
          <span style="font-size: 0.85rem; color: var(--color-text-muted);">Try searching for "egg bites", "breakfast", or "pancakes"</span>
        </div>
      `;
      return;
    }

    searchResultsArea.innerHTML = matches.map(r => `
      <a href="${getRecipeHref(r.slug)}" class="search-result-item">
        <img src="${r.image}" alt="${r.title}" class="search-result-thumb">
        <div class="search-result-info">
          <h4>${r.title}</h4>
          <span>${r.category} &bull; ${r.totalTime}</span>
        </div>
      </a>
    `).join('');
  });

  searchResultsArea.addEventListener('click', (e) => {
    if (e.target.closest('.search-result-item')) {
      closeSearchModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearchModal();
    }
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// ==========================================================================
// 7. Accessible Newsletter Form Handling
// ==========================================================================
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const errorFeedback = document.getElementById('newsletter-error');
  const successBox = document.getElementById('newsletter-success');

  if (!form || !emailInput) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!emailValue || !emailRegex.test(emailValue)) {
      emailInput.classList.add('error');
      if (errorFeedback) {
        errorFeedback.textContent = 'Please enter a valid email address.';
        errorFeedback.classList.add('error-msg');
      }
      emailInput.focus();
      return;
    }

    // Success state
    emailInput.classList.remove('error');
    if (errorFeedback) {
      errorFeedback.textContent = '';
      errorFeedback.classList.remove('error-msg');
    }

    form.style.display = 'none';
    if (successBox) {
      successBox.classList.add('active');
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('error')) {
      emailInput.classList.remove('error');
      if (errorFeedback) {
        errorFeedback.textContent = '';
        errorFeedback.classList.remove('error-msg');
      }
    }
  });
}
