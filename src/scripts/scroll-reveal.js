export function initializeScrollReveal() {
  const revealTargets = document.querySelectorAll(
    ".image-details-grid-container, .album-header, .photo-frame, .avengers-poster1, .avengers-poster2, .marvel-logo-container, .countdown-container",
  );

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  document.documentElement.classList.add("has-scroll-reveal");
  revealTargets.forEach((target) => {
    target.dataset.scrollReveal = "";
    observer.observe(target);
  });
}
