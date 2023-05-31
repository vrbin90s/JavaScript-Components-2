import createHTMLElement from "../functions.js";
import filterForm from "./filter-form.js";

export default function programFilter() {
    const programFilter = createHTMLElement({ element: 'div', className: 'programs-filter' });

    const buttonFilter = createHTMLElement({ element: 'button', className: ['button', 'button-filter']});
    
    programFilter.append(filterForm(),buttonFilter);
    
    return programFilter;
}