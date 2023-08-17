document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs__title');
  const tabContents = document.querySelectorAll('.tabs__body');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs and hide their contents
      tabs.forEach(t => t.classList.remove('_tab-active'));
      tabContents.forEach(content => content.classList.remove('_content-active'));

      // Activate the clicked tab and show its content
      tab.classList.add('_tab-active');
      
      tabContents[index].classList.add('_content-active');
    });
  });
});

