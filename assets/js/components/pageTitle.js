import createHTMLElement from "../functions.js";

export default function  pageTitle(title) {
    const pageTitle = createHTMLElement({ element: 'h1', className: 'page-title', text: title });
    return pageTitle;
}