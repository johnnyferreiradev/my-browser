// elements
const browser = document.querySelector('.browser');

const tabs = browser.querySelectorAll('.tab');

// states


// functions
const deactiveTab = (tab) => {
    tabs.forEach((tab) => tab.classList.remove('active'));
}

const toggleActiveTab = (e) => {
    const tab = e.target;
    deactiveTab(tab);
    console.log(tab.classList.add('active'));
};

// event assignment
tabs.forEach((tab) => {
    tab.addEventListener('click', toggleActiveTab);
});
