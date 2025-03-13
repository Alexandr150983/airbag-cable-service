function initWorksFilter() {
  const filterButtons = document.querySelectorAll('.works-btn');
  const workItems = document.querySelectorAll('.works-item');

  function filterWorks(event) {
    const filterValue = event.currentTarget.getAttribute('data-filter');

    workItems.forEach(work => {
      work.style.display =
        work.classList.contains(filterValue) || filterValue === 'all'
          ? 'block'
          : 'none';
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', filterWorks);
  });
}

document.addEventListener('DOMContentLoaded', initWorksFilter);
