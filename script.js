// Появление блоков при скролле. Без JS ничего не прячется: класс .pre ставит скрипт.
(function(){
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.fade');
  if (reduced || !('IntersectionObserver' in window) || !els.length) return;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.remove('pre');
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold: .12});
  els.forEach(function(el){ el.classList.add('pre'); io.observe(el); });
})();

// форма-заглушка: демо-проект, никуда не отправляет, только подтверждает поле
function sendLead(e){
  e.preventDefault();
  var s = document.getElementById('leadStatus');
  if (s) { s.textContent = 'Это демо-форма: в реальном проекте заявка уйдёт мастеру на телефон.'; s.style.color = '#8C5A25'; }
  return false;
}