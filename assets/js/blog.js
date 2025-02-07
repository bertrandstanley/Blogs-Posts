const mainEl = document.querySelector('main');
const backBtnEl = document.querySelector('#back');

const buildElement = function (type, text, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);

  return tag;
};

const handleEmpty = function () {
  buildElement('h2', 'No Blog posts yet...', mainEl);
  const a = buildElement('a', 'Enter your own submission here!', mainEl);

  a.href = './index.html';
};

const renderBlogList = function () {
  const blogs = readLocalStorage();

  if (!blogs.length) {
    handleEmpty();

    return;
  }

  for (const blog of blogs) {
    const article = buildElement('article', null, mainEl);

    buildElement('h2', blog.title, article);
    buildElement('blockquote', blog.content, article);
    buildElement('p', `Posted by: ${blog.username}`, article);

    article.classList.add('card');
  }
};

renderBlogList();
backBtnEl.addEventListener('click', function() {
  redirectPage('index.html');
});
