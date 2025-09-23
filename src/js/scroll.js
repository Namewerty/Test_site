/**
 * Intersection Observer for scroll-triggered animations
 * Adds [data-inview] attribute when elements enter viewport
 */

// Default options for the intersection observer
const defaultOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
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
          detail: { entry }
        }));
        
        // Optional: unobserve after first intersection
        if (entry.target.hasAttribute('data-observe-once')) {
          observer.unobserve(entry.target);
        }
      } else {
        // Remove data attribute when element is out of view
        entry.target.removeAttribute('data-inview');
      }
    });
  }, observerOptions);
  
  return observer;
}

// Auto-initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  const observer = initScrollObserver();
  
  // Observe all elements with [data-scroll-observe] attribute
  const elementsToObserve = document.querySelectorAll('[data-scroll-observe]');
  elementsToObserve.forEach(element => {
    observer.observe(element);
  });
});

// Export for manual initialization
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initScrollObserver };
}
