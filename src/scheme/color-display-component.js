export function createColorDisplay(color) {
    const html = /*html*/`
        <section class="color-display">
            <p>#${color}</p>
            <div style="background-color: #${color};"></div>
        </section>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const colorContainer = document.getElementById('color-container');

export default function loadColorDisplay(colors) {
    clearColorDisplay();
    colors.forEach(color => {
        const dom = createColorDisplay(color);
        colorContainer.appendChild(dom);
    });
}

function clearColorDisplay() {
    while(colorContainer.children.length > 0) {
        colorContainer.lastElementChild.remove();
    }
}