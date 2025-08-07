document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  function showTab(tabId) {

    tabContents.forEach(content => {
      content.style.display = 'none';
    });

    tabLinks.forEach(link => {
      link.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }

    const selectedLink = document.querySelector(`[data-tab="${tabId}"]`);
    if (selectedLink) {
      selectedLink.classList.add('active');
    }
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      showTab(tabId);

      window.history.pushState({}, '', `#${tabId}`);
    });
  });

  window.addEventListener('popstate', function() {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      showTab(hash);
    }
  });

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    showTab(initialHash);
  } else {
    showTab('');
  }
});
