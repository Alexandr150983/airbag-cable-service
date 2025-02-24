(() => {
  const filters = document.querySelectorAll('.works-btn');
  const works = document.querySelectorAll('.works-item');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const filterValue = filter.getAttribute('data-filter');
      works.forEach(work => {
        if (filterValue === 'all' || work.classList.contains(filterValue)) {
          work.style.display = 'block';
        } else {
          work.style.display = 'none';
        }
      });
    });
  });
})();
