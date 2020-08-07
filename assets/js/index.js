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
const getDetails = () => browser.querySelector('#details');

const hideToolbar = () => {
    urlBar.style.display = 'none';
    closeButton.style.display = 'none';
    menu.style.display = 'none';
}

const showToolbar = () => {
    urlBar.style.display = 'flex';
    closeButton.style.display = 'inline-block';
}

const closeWindow = () => {
    addButton.style.display = 'inline-block';
    hideToolbar();
    const currentIframe = getIframe();
    const detais = getDetails();

    removeElement(currentIframe);
    removeElement(detais);
    urlField.value = '';
}

const newWindow = () => {
    addButton.style.display = 'none';
    showToolbar();
    createIframe('./empty-window');
    urlField.focus();
}

const createDetailItem = (value) => {
    const p = document.createElement('p');
    p.innerHTML = value;
    return p;
}

const createDetailContent = (data) => {
    const pageUrlP = createDetailItem(data.pageUrl);
    const protocolP = createDetailItem(data.protocol);
    const portP = createDetailItem(data.port);
    const screenHeightP = createDetailItem(data.screenHeight);
    const screenWidthP = createDetailItem(data.screenWidth);
    const OSP = createDetailItem(data.OS);

    const div = document.createElement('div');
    div.append(pageUrlP);
    div.append(protocolP);
    div.append(portP);
    div.append(screenHeightP);
    div.append(screenWidthP);
    div.append(OSP);

    div.id = 'details';

    return div;
}

const loadWindowData = (iframeWindow) => {
    const pageUrl = iframeWindow.location.href;
    const protocol = iframeWindow.location.protocol;
    const port = iframeWindow.location.port;
    const screenHeight = iframeWindow.screen.availHeight;
    const screenWidth = iframeWindow.screen.availWidth;
    const OS = iframeWindow.navigator.appVersion;

    const content = createDetailContent({
        pageUrl,
        protocol,
        port,
        screenHeight,
        screenWidth,
        OS,
    });
    detailsField.append(content);
}

const fetchUrl = (url) => {
    const currentIframe = getIframe();
    const iframeWindow = window.open(url, currentIframe.name);
    menu.style.display = 'block';
    loadWindowData(iframeWindow);
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
