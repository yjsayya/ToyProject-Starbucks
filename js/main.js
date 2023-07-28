

// 1.icon,  2.Input창
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');


// input창을 누르면 focus된다 
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});


// 
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});


// 
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});