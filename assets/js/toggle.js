// elements
const browser = document.querySelector('.browser');

const tabs = browser.querySelectorAll('tab');

// states


// functions
const deactiveTab = () => {
    tabs.forEach((tab) => tab.classList.remove('active'));
}

const toggleActiveTab = (tab) => {
    deactiveTab();
    tab.classList.add('active');
};

// event assignment
tabs.forEach((tab) => {
    tab.addEventListener('click', ({ target }) => deactiveTab(target));
});
