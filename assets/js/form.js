const formEl = document.querySelector('form');

const handleFormSubmit = function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username').value.trim();
  const titleEl = document.querySelector('#title').value.trim();
  const contentEl = document.querySelector('#content').value.trim();

  if (!usernameEl || !titleEl || !contentEl) {
    const errorEl = document.querySelector('#error');
    errorEl.textContent = 'Please complete the form.';

    setTimeout(function () {
      errorEl.textContent = '';
    }, 4000);

    return;
  }

  const formData = {
    username: usernameEl,
    title: titleEl,
    content: contentEl,
  };

  storeLocalStorage(formData);
  redirectPage('blog.html');
};

formEl.addEventListener('submit', handleFormSubmit);
