export function createThumbnailDiv(path) {
    const html = /*html*/ `
        <div class="thumbnail"><img src="${path}"></div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}