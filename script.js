document.addEventListener('DOMContentLoaded', () => {
  const loadConfig = async () => {
    try {
      const response = await fetch('config.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const config = await response.json();
      const appName = config.appName;

      // Update the page title
      // We check if the element exists before trying to update it
      const titleElement = document.getElementById('app-title');
      if (titleElement) {
        // To change the main title, we need to replace the placeholder part
        document.title = document.title.replace('EduQuest', appName);
      }

      // Update the header
      const headerElement = document.getElementById('app-name-header');
      if (headerElement) {
        headerElement.textContent = appName;
      }

      // Update the footer
      const footerElement = document.getElementById('app-name-footer');
      if (footerElement) {
        footerElement.textContent = appName;
      }

    } catch (error) {
      console.error('Failed to load application configuration:', error);
    }
  };

  loadConfig();
});
