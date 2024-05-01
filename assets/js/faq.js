const items = document.querySelectorAll(".accordion__button");
function toggleAccordion() {
  const itemToggle = this.getAttribute('data-is-open');
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('data-is-open', 'false');
  }
  if (itemToggle == 'false') {
    this.setAttribute('data-is-open', 'true');
  }
}
items.forEach(item => item.addEventListener('click', toggleAccordion));
