const scrollRevealOption = {
  distance:"50px",
  duration: 1000,
};

ScrollReveal().reveal(".hero-content h1", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".course-box", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});