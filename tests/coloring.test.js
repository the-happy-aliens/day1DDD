import './html-equal.js';
import littleGuyFillSvg from '../src/coloring/little-guy.js';
const test = QUnit.test;

QUnit.module('coloring tests');

const colors = ['24b1e0', '22A9D5', '2175DB', '223FDF', '4226E1', '7D29E3'];

test('color scheme generated will replace colors in svg', assert => {
    //arrange
    const expected = /*html*/ `
    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1366 768" enable-background="new 0 0 1366 768" xml:space="preserve">
       <path id="head" fill="#24b1e0" d="M332,545.1c0,0,84,111.9,199,50.9l15-49c0,0,69.8-69.9,85-103s48-110,41-132s9.6-60.4-16.7-95.1
           c-26.3-34.8-42.4-64.9-87.1-66.1c-44.7-1.2-94.2-8.1-159.2,62.1s-37,220.4-37,235.8C372,464,370.1,513.2,332,545.1z"></path>
       <g id="eyes">
           <path id="left_eye" fill="#22A9D5" d="M409,291h9c0,0,0,31,12,31s12,9,30-15.5l9,7.5c0,0-23,30-38,20S410,327,409,291z"></path>
           <path id="right_eye" fill="#22A9D5" d="M571,349l10,8c0,0-6,9,0,14s8,7,20-11s9,1.7,9,1.7S590,396,576,384S571,349,571,349z"></path>
       </g>
       <path id="nose" fill="#22A9D5" d="M508,404c0,0-18-9-10-20s50-64,50-64l-26,84H508z"></path>
       <path id="mouth" fill="2175DB" d="M469,418c-0.4-3,53,20.6,53,20.6s-31,17.4-40,6.4S472,441,469,418z"></path>
       <path id="shirt" fill="#7D29E3" d="M215,728.5c0,0,8-104.5,90-160.5c0,0,54,94,217,73c0,0-8,94,0,87.5S215,728.5,215,728.5z"></path>
       <path id="collar" fill="#4226E1" d="M331,545.1c0,0,55,54.3,77,58.5c22,4.2,39,24.1,122-5.2l-9,47.1c0,0-138,26.2-217-76.4
           L331,545.1z"></path>
       <g id="drops">
           <path fill="#223FDF" d="M645,471c-11,63-1,64,10,66S645,471,645,471z"></path>
           <path fill="#223FDF" d="M617,573c0,0-20,59,0,60S617,573,617,573z"></path>
           <path fill="#223FDF" d="M658.2,573c0,0-11.2,58,4.8,52S658.2,573,658.2,573z"></path>
       </g>
       </svg>
    `;
    //act
    const result = littleGuyFillSvg(colors);
    //assert
    assert.htmlEqual(result, expected);
});