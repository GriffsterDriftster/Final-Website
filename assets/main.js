function toggleMenu(){
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('open');
}
// FAQ toggle accessible
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if(item.open){
      faqItems.forEach(i => { if(i !== item) i.removeAttribute('open'); });
    }
  });
});
