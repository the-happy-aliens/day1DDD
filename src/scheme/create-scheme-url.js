const BASE_URL = 'https://www.thecolorapi.com/scheme';

export function createSchemeUrl(schemeOptions) {
    const url = new URL(BASE_URL);
    url.searchParams.set('hex', schemeOptions.originalColor);
    url.searchParams.set('mode', schemeOptions.scheme);
    url.searchParams.set('count', schemeOptions.count);
    return url.toString();
}