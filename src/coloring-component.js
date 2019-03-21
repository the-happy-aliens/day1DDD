export function createColorDiv(color) {
    const html = /*html*/ `
        <div class="palette-color" style="background-color: #${color};"></div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function createSchemeLi(scheme) {
    const html = /*html*/ `
    <li>${scheme}</li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const schemesList = document.getElementById('schemes-list');
const paletteContainer = document.getElementById('palette-container');

export function loadSchemesList(schemesIds, favoriteSchemes) {
    schemesIds.forEach((schemeId, index) => {
        const schemeDom = createSchemeLi(schemeId);
        const li = schemeDom.querySelector('li');
        li.addEventListener('click', () => {
            favoriteSchemes[index].scheme.forEach(color => {
                const colorDom = createColorDiv(color);
                const colorDiv = colorDom.querySelector('div');
                colorDiv.addEventListener('click', () => {
                    console.log(colorDiv.style);
                });
                paletteContainer.appendChild(colorDom);
            });
        });
        schemesList.appendChild(schemeDom);
    });
}