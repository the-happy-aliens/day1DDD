export function makeHeader() {
    const html = /*html*/`
        <header>
            <h1 class="fancy-header">PRISMATIC</h1>
        </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}