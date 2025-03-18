const modeBtnEl = document.querySelector('#toggle');

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

const applyMode = function (mode) {
  let icon, circleColor;

  if (mode === 'light') {
    icon = '☀️';
    circleColor = '#ffb100';
  } else {
    icon = '🌒';
    circleColor = '#8570a5';
  }

  modeBtnEl.textContent = icon;

  document.body.classList = mode;

  document.documentElement.style.setProperty('--circle-color', circleColor);
};

const handleModeToggle = function () {
  const mode = readMode();

  let nextMode;

  if (mode === 'light') {
    nextMode = 'dark';
  } else {
    nextMode = 'light';
  }

  applyMode(nextMode);

  saveMode(nextMode);
};

const readLocalStorage = function () {
  const stringData = localStorage.getItem('blogs');

  const data = JSON.parse(stringData);

  return data || [];
};

const readMode = function () {
  const mode = localStorage.getItem('mode') || 'dark';

  return mode;
};

const saveMode = function (mode) {
  localStorage.setItem('mode', mode);
};

const storeLocalStorage = function (data) {
  const allBlogs = readLocalStorage();

  allBlogs.push(data);

  const stringData = JSON.stringify(allBlogs);

  localStorage.setItem('blogs', stringData);
};

applyMode(readMode());

modeBtnEl.addEventListener('click', handleModeToggle);
