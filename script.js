document.addEventListener('DOMContentLoaded', () => {

    const filterButtons  = document.querySelectorAll('.filter-btn[data-filter]');
    const workItems      = document.querySelectorAll('.work-item');
    const photoPlaceholder = document.querySelector('.photo-placeholder');
    const sectionHeads   = document.querySelectorAll('.section-head[data-section]');
  
    function filterWorks(category) {
  
    
      workItems.forEach(item => {
        const itemCategory = item.dataset.category; 
  
        if (category === 'all' || itemCategory === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
  
      if (photoPlaceholder) {
        if (category === 'all' || category === 'photo') {
          photoPlaceholder.classList.remove('hidden');
        } else {
          photoPlaceholder.classList.add('hidden');
        }
      }
  
      sectionHeads.forEach(head => {
        const headSection = head.dataset.section;
  
        if (category === 'all' || headSection === category) {
          head.classList.remove('hidden');
        } else {
          head.classList.add('hidden');
        }
      });
    }

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
  
        filterButtons.forEach(b => b.classList.remove('active'));
  
        btn.classList.add('active');

        const selectedCategory = btn.dataset.filter;
        filterWorks(selectedCategory);
      });
    });
  
    filterWorks('all');
  
  });