import { createSavedPictureLi } from '../src/favorite-component.js';

const test = QUnit.test;

QUnit.module('Saved Pictues');

test('create li for saved pictures', assert => {
    // arrange
    const expected = /*html*/ `
    <li>
    <svg version="1.1" id="bird-guy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
   <rect id="background" x="19.5" y="16.5" fill="#FFFFFF" width="965.6" height="965.6"></rect>
   <path id="body" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M161.4,779.6c0,0-6.4-149.1,139.4-166
       c0,0,203.6,78.5,362.3-7.6c0,0,101.3-12.1,135.9,159.1l-35.6-37.5c0,0,43.6,55.8,52.5,111.6l-36.6-26.9c0,0,48.5,49.1,49.5,98.1
       L798,875.9c0,0,32.7,57.7,30.7,77c-2,19.2-36.6-28.9-36.6-28.9l9.9,41.4h-596l-1-57.7l-22.8,34.6c0,0-5-76,13.9-101l-29.7,62.5
       c0,0-12.9-72.2,11.9-99.1l-29.7,60.6C148.5,865.3,147.5,790.2,161.4,779.6z"></path>
   <path id="belly" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M288.1,951.9
       c-1-3.8-48.5-238.6,145.5-242.5c194-3.8,187.1,242.5,187.1,242.5v15.4H294.8L288.1,951.9z"></path>
   <path id="feather-left" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M308,193.3
       c0,0-53.6-101.6-97.1-100.6s-30.7,0-30.7,0S179.5,180.3,308,193.3z"></path>
   <path id="feather-right" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M326.7,193.7
       c1-3.8,31.7-78.9,22.8-114.5c-8.9-35.6-37.6-38.5-37.6-38.5s-27.7,14.4-22.8,38.5C294,103.2,326.7,193.7,326.7,193.7z"></path>
   <path id="face" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M160.4,478.5
       c-6.9-172.2,103-322.3,253.4-341.6S799,147.5,773.2,454.4C747.5,761.4,167.3,650.7,160.4,478.5z"></path>
   <polygon id="beak" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" points="342.6,402.5 479.2,402.5 
       374.2,607.4 "></polygon>
   <path id="eye-shape-left" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M221.6,407.2c32.9-4.7,65.8,3.7,75.4,14.4
       l17.1,15.3c0,0-79.8,42-114.5-7.9l-13-15.3C186.6,413.7,203.2,409.8,221.6,407.2z"></path>
   <path id="eye-shape-right" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M638.7,404.3c-40.3-5.6-80.3,3.8-91.8,16.3
       l-20.5,17.6c0,0,98.4,48.7,139.6-8.6l15.4-17.5C681.5,412,661.2,407.4,638.7,404.3z"></path>
   <ellipse id="eye-right" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="597.5" cy="429.9" rx="23.3" ry="22.6"></ellipse>
   <ellipse id="eye-left" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="233.2" cy="428" rx="18.3" ry="17.8"></ellipse>
   </svg>                 
</li>
    `;
    const savedPicture = {
        id: 'bird-guy90583',
        picture: `<svg version="1.1" id="bird-guy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
   <rect id="background" x="19.5" y="16.5" fill="#FFFFFF" width="965.6" height="965.6"></rect>
   <path id="body" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M161.4,779.6c0,0-6.4-149.1,139.4-166
       c0,0,203.6,78.5,362.3-7.6c0,0,101.3-12.1,135.9,159.1l-35.6-37.5c0,0,43.6,55.8,52.5,111.6l-36.6-26.9c0,0,48.5,49.1,49.5,98.1
       L798,875.9c0,0,32.7,57.7,30.7,77c-2,19.2-36.6-28.9-36.6-28.9l9.9,41.4h-596l-1-57.7l-22.8,34.6c0,0-5-76,13.9-101l-29.7,62.5
       c0,0-12.9-72.2,11.9-99.1l-29.7,60.6C148.5,865.3,147.5,790.2,161.4,779.6z"></path>
   <path id="belly" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M288.1,951.9
       c-1-3.8-48.5-238.6,145.5-242.5c194-3.8,187.1,242.5,187.1,242.5v15.4H294.8L288.1,951.9z"></path>
   <path id="feather-left" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M308,193.3
       c0,0-53.6-101.6-97.1-100.6s-30.7,0-30.7,0S179.5,180.3,308,193.3z"></path>
   <path id="feather-right" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M326.7,193.7
       c1-3.8,31.7-78.9,22.8-114.5c-8.9-35.6-37.6-38.5-37.6-38.5s-27.7,14.4-22.8,38.5C294,103.2,326.7,193.7,326.7,193.7z"></path>
   <path id="face" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M160.4,478.5
       c-6.9-172.2,103-322.3,253.4-341.6S799,147.5,773.2,454.4C747.5,761.4,167.3,650.7,160.4,478.5z"></path>
   <polygon id="beak" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" points="342.6,402.5 479.2,402.5 
       374.2,607.4 "></polygon>
   <path id="eye-shape-left" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M221.6,407.2c32.9-4.7,65.8,3.7,75.4,14.4
       l17.1,15.3c0,0-79.8,42-114.5-7.9l-13-15.3C186.6,413.7,203.2,409.8,221.6,407.2z"></path>
   <path id="eye-shape-right" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M638.7,404.3c-40.3-5.6-80.3,3.8-91.8,16.3
       l-20.5,17.6c0,0,98.4,48.7,139.6-8.6l15.4-17.5C681.5,412,661.2,407.4,638.7,404.3z"></path>
   <ellipse id="eye-right" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="597.5" cy="429.9" rx="23.3" ry="22.6"></ellipse>
   <ellipse id="eye-left" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="233.2" cy="428" rx="18.3" ry="17.8"></ellipse>
   </svg>`
    };
    // act
    const result = createSavedPictureLi(savedPicture);
    // assert
    assert.htmlEqual(result, expected);
});