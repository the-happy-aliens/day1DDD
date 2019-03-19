export function createColorArray(scheme) {
    const colorArray = [];
    scheme.colors.forEach(color => {
        colorArray.push(color.hex.clean);
    });
    return colorArray;
}