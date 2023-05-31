import banner from "./components/banner.js";
import pageTitle from "./components/pageTitle.js";
import programFilter from "./components/program-filter.js";
import programs from "./components/programs.js";
import createHTMLElement from "./functions.js";


function init() {
    const content = document.querySelector('.container');
    const pageContent = createHTMLElement({ element: 'div', className: 'page-content', append: pageTitle('Programos') });
    pageContent.append(banner('Nežinai ką pasirinkti?', 'Spręsk IT testą'), programs());
    content.append(pageContent);
}

init();