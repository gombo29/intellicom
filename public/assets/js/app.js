(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('on'); });
    return;
  }
  function count(n) {
    if (n.dataset.counted) return;
    n.dataset.counted = '1';
    var target = parseInt(n.getAttribute('data-count'), 10);
    var suffix = n.getAttribute('data-suffix') || '';
    var t0 = performance.now(), dur = 1200;
    function tick(t) {
      var p = Math.min(1, (t - t0) / dur);
      n.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.hasAttribute('data-reveal'); });
      el.style.transitionDelay = (sibs.indexOf(el) * 90) + 'ms';
      el.classList.add('on');
      io.unobserve(el);
      el.querySelectorAll('[data-count]').forEach(count);
      if (el.hasAttribute('data-count')) count(el);
    });
  }, { threshold: 0.15 });
  els.forEach(function (el) { io.observe(el); });
})();
