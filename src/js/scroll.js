/**
 * Intersection Observer for scroll-triggered animations
 * Toggles [data-inview] attribute on elements with [data-animate] when they enter viewport
 */

// Default options for the intersection observer
const defaultOptions = {
  threshold: 0.25,
  rootMargin: '0px 0px -20px 0px'
};

// Initialize scroll observer
function initScrollObserver(options = {}) {
  const observerOptions = { ...defaultOptions, ...options };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add data attribute when element is in view
        entry.target.setAttribute('data-inview', 'true');
        
        // Trigger custom event for additional handling
        entry.target.dispatchEvent(new CustomEvent('inview', {
          detail: { entry, observer }
        }));
      } else {
        // Remove data attribute when element is out of view (allows re-triggering)
        entry.target.removeAttribute('data-inview');
      }
    });
  }, observerOptions);
  
  return observer;
}

// Initialize filter chips functionality
function initFilterChips() {
  const chips = document.querySelectorAll('.chip[data-filter]');
  const caseCards = document.querySelectorAll('.case-card[data-category]');
  
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      
      // Update chip states
      chips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      
      // Filter case cards
      caseCards.forEach(card => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Auto-initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize intersection observer
  const observer = initScrollObserver();
  
  // Observe all elements with [data-animate] attribute
  const elementsToAnimate = document.querySelectorAll('[data-animate]');
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
  
  // Initialize filter chips
  initFilterChips();
  
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Force all animated elements to be visible immediately
    elementsToAnimate.forEach(element => {
      element.setAttribute('data-inview', 'true');
    });
  }
});

// Export for manual initialization
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initScrollObserver, initFilterChips };
}
