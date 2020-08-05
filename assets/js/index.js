// elements
const browser = document.querySelector('.browser');

const urlElement = browser.querySelector('#url_text');
const tabs = browser.querySelectorAll('.tab');

const frameTab = browser.querySelector('.responsive-iframe');

// states
const registeredDomains = [
    'www.paradigm.com',
    'www.thereal.com',
];

// functions
const deactiveTab = (tab) => {
    tabs.forEach((tab) => tab.classList.remove('active'));
}

const toggleActiveTab = (e) => {
    const tab = e.target;
    deactiveTab(tab);
    console.log(tab.classList.add('active'));
};

const fetchUrl = (url) => {
    frameTab.src = `./${url}`;
}

// www.paradigm.com
// www.thereal.com
const search = (e) => {
    const urlElement = e.target;
    const key = e.which || e.keyCode;

    if (key === 13) {
        const isRegistered = registeredDomains.find((url) => url === urlElement.value);

        if (isRegistered) {
            fetchUrl(urlElement.value);
        } else {
            console.log('passou aqui');
            fetchUrl('not-found');
        }
    }
}

// event assignment
urlElement.addEventListener('keyup', search);

tabs.forEach((tab) => {
    tab.addEventListener('click', toggleActiveTab);
});
