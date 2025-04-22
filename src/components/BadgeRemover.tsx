
import { useEffect } from 'react';

const BadgeRemover = () => {
  useEffect(() => {
    const removeBadge = () => {
      const badge = document.getElementById('lovable-badge');
      if (badge) {
        badge.remove();
      }
    };

    // Initial removal
    removeBadge();

    // Setup observer to handle dynamically added badges
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        removeBadge();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default BadgeRemover;
