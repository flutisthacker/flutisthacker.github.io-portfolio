
const selector =
document.getElementById('themeSelector');

selector.addEventListener('change', () => {

document.getElementById('themeStylesheet').href =
`./${selector.value}.css`;

renderCV(cvData);

});