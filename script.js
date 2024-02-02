const showButton = document.querySelector('.brands__show-button');
const showButtonText = document.querySelector('.brands__show-button-text');
const showButtonIco = document.querySelector('.brands__show-button-ico');

showButton.addEventListener('click', () => {
    const brandContainer = document.querySelector('.brands__list-container');
    brandContainer.classList.toggle('brands__list-container--big');
    showButtonIco.classList.toggle('rotate')
    if (showButtonText.textContent === 'Скрыть'){
        showButtonText.textContent = 'Показать все';
    }else{
        showButtonText.textContent = 'Скрыть';
    };
    showButton.classList.toggle('brands__show-button--active')
});