// elements
const browser = document.querySelector('.browser');

const urlBar = browser.querySelector('#url');
const urlField = browser.querySelector('#url_text');
const frameTab = browser.querySelector('.responsive-iframe');
const closeButton = browser.querySelector('.dot');
const addButton = browser.querySelector('#new-tab');
const menu = browser.querySelector('#menu');

// states


// functions
const removeElement = (element) => {
    element.parentNode.removeElement(element);
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
}

const newWindow = () => {
    addButton.style.display = 'none';
    showToolbar();
}

const createIframe = (url) => {
    const iframe = document.createElement('iframe');
    iframe.name = 'frameTab';
    iframe.className = 'responsive-iframe';
    iframe.src = url;

    return iframe;
}

const fetchUrl = (url) => {
    frameTab.src = url;
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
