// elements
const browser = document.querySelector('.browser');

const urlBar = browser.querySelector('#url');
const urlField = browser.querySelector('#url_text');
const frameContainer = browser.querySelector('.container-frameTab');
const frameTab = browser.querySelector('.responsive-iframe');
const closeButton = browser.querySelector('.dot');
const addButton = browser.querySelector('#new-tab');
const searchButton = browser.querySelector('.search-button');
const menu = browser.querySelector('#menu');
const detailsField = browser.querySelector('#page-details');

// states

// functions
const removeElement = (element) => {
    element.parentNode.removeChild(element);
}

const createIframe = (url) => {
    const iframe = document.createElement('iframe');
    iframe.name = 'frameTab';
    iframe.className = 'responsive-iframe';
    iframe.src = url;
    iframe.id = 'frame-content';

    frameContainer.append(iframe);
}

const getIframe = () => browser.querySelector('#frame-content');

const hideToolbar = () => {
    urlBar.style.display = 'none';
    closeButton.style.display = 'none';
    menu.style.display = 'none';
}

const showToolbar = () => {
    urlBar.style.display = 'flex';
    closeButton.style.display = 'inline-block';
    menu.style.display = 'block';
}

const closeWindow = () => {
    addButton.style.display = 'inline-block';
    hideToolbar();
    const currentIframe = getIframe();
    removeElement(currentIframe);
    urlField.value = '';
}

const newWindow = () => {
    addButton.style.display = 'none';
    showToolbar();
    createIframe('./empty-window');
    urlField.focus();
}

const fetchUrl = (url) => {
    const currentIframe = getIframe();
    currentIframe.src = url;
}

const search = (e) => {
    const key = e.which || e.keyCode;

    if (key === 13 || key === 1) {
        fetchUrl(urlField.value);
    }
}

// event assignment
urlField.addEventListener('keyup', search);
searchButton.addEventListener('click', search);
closeButton.addEventListener('click', closeWindow);
addButton.addEventListener('click', newWindow);
