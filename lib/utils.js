const utils = {};

utils.fileExtension = (url) => {
    const mainPart = url.split('?')[0];
    const dotParts = mainPart.split('.');
    return dotParts[dotParts.length - 1];
}

export { utils };

// exporto-importo kodavimo variantai
//1
// export { utils };
// import { utils } from './utils.js';

//2
// export default utils;
// import kebabas from './utils.js';