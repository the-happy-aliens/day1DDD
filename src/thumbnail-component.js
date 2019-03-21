export function createThumbnailDiv(path) {
    const html = /*html*/ `
        <div class="thumbnail"><img src="${path}"></div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
const thumbnailContainer = document.getElementById('thumbnail-container');
const coloringContainer = document.getElementById('coloring-container');

export default function loadThumbnails(paths, coloringImages, coloringColor) {
    paths.forEach((path, index) => {
        const thumbnailDom = createThumbnailDiv(path);
        const thumbnailDiv = thumbnailDom.querySelector('.thumbnail');
        thumbnailDiv.addEventListener('click', () => {
            clearColoringContainer();
            const template = document.createElement('template');
            template.innerHTML = coloringImages[index];
            const coloringDom = template.content;

            const rects = coloringDom.querySelectorAll('rect');

            rects.forEach(rect => {
                rect.addEventListener('click', () => {
                    rect.setAttribute('fill', coloringColor);
                });
            });

            const paths = coloringDom.querySelectorAll('path');

            paths.forEach(path => {
                path.addEventListener('click', () => {
                    path.setAttribute('fill', coloringColor);
                    console.log('click');
                });
            });
            const circles = coloringDom.querySelectorAll('circle');

            circles.forEach(circle => {
                circle.addEventListener('click', () => {
                    circle.setAttribute('fill', coloringColor);
                });
            });
            const polygons = coloringDom.querySelectorAll('polygon');

            polygons.forEach(polygon => {
                polygon.addEventListener('click', () => {
                    polygon.setAttribute('fill', coloringColor);
                });
            });
            coloringContainer.appendChild(coloringDom);
        });
        thumbnailContainer.appendChild(thumbnailDom);
    });
}

function clearColoringContainer() {
    while(coloringContainer.children.length > 0) {
        coloringContainer.lastElementChild.remove();
    }
}