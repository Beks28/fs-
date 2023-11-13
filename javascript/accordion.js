function toggleAccordion(button) {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');
 
    closeAllItems();
 
    if (!isActive) {
       item.classList.add('active');
    }
 }
 
 function closeAllItems() {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => item.classList.remove('active'));
 }