// elements
const browser = document.querySelector('.browser');

const urlBar = browser.querySelector('#url');
const urlField = browser.querySelector('#url_text');
const frameContainer = browser.querySelector('.container-frameTab');
const frameTab = browser.querySelector('.responsive-iframe');
const closeButton = browser.querySelector('.dot');
const addButton = browser.querySelector('#new-tab');
const menu = browser.querySelector('#menu');

// states
let currentIframe = null;

// functions
const removeElement = (element) => {
    element.parentNode.removeElement(element);
}

const createIframe = (url) => {
    const iframe = document.createElement('iframe');
    iframe.name = 'frameTab';
    iframe.className = 'responsive-iframe';
    iframe.src = url;
    iframe.id = 'frame-content';

    currentIframe = iframe;
    frameContainer.append(currentIframe);
}

const hideToolbar = () => {
    urlBar.style.display = 'none';
    closeButton.style.display = 'none';
    menu.style.display = 'none';
}

const showToolbar = () => {
    urlBar.style.display = 'block';
    closeButton.style.display = 'inline-block';
    menu.style.display = 'block';
}

const closeWindow = () => {
    addButton.style.display = 'inline-block';
    hideToolbar();
    currentIframe = null;
}

const newWindow = () => {
    addButton.style.display = 'none';
    showToolbar();
    createIframe('./empty-window');
}

const fetchUrl = (url) => {
    currentIframe.src = url;
}

const search = (e) => {
    const urlField = e.target;
    const key = e.which || e.keyCode;

    if (key === 13) {
        fetchUrl(urlField.value);
    }
}

// event assignment
urlField.addEventListener('keyup', search);
closeButton.addEventListener('click', closeWindow);
addButton.addEventListener('click', newWindow);
