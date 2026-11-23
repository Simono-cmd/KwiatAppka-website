(function () {
  if (!window.Lenis) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var header = document.querySelector('.top');
  var offset = header ? header.offsetHeight + 16 : 90;
  new window.Lenis({
    autoRaf: true,
    lerp: 0.09,
    anchors: { offset: -offset }
  });
})();
