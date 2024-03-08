"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import { Gallery, Image } from "react-grid-gallery";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// interface CustomImage extends Image {
//   original: string;
// }
var ImageGallery = function (data) {
    var _a, _b, _c;
    var _d = react_1.useState(-1), index = _d[0], setIndex = _d[1];
    var handleClick = function (index, item) { return setIndex(index); };
    var images = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.images.data.map(function (_a) {
        var attributes = _a.attributes;
        return ({
            src: attributes.formats.medium.url,
            width: attributes.formats.medium.width,
            height: attributes.formats.medium.height,
            original: attributes.url
        });
    });
    return (React.createElement(React.Fragment, null));
};
exports["default"] = ImageGallery;
