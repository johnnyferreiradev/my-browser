// elements
const browser = document.querySelector('.browser');

const urlElement = browser.querySelector('#url_text');
const frameTab = browser.querySelector('.responsive-iframe');
const closeButton = browser.querySelector('.dot');

// states


// functions
const removeElement = (element) => {
    element.parentNode.removeElement(element);
}

const closeWindow = () => {
    console.log('Clicou');
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
    const urlElement = e.target;
    const key = e.which || e.keyCode;

    if (key === 13) {
        fetchUrl(urlElement.value);
    }
}

// event assignment
urlElement.addEventListener('keyup', search);
closeButton.addEventListener('click', closeWindow);
