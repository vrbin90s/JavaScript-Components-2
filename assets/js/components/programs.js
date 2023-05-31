import { PROGRAMS_DATA } from "../config.js";
import createHTMLElement from "../functions.js";
import programFilter from "./program-filter.js";
import program from "./program.js";
export default function programs() {
    
    const programsWrapper = createHTMLElement({ element: 'div', className: 'programs-wrapper' });
    const programsList = createHTMLElement({ element: 'div', className: 'programs-list' });

    PROGRAMS_DATA.forEach(programData => {
        const featuresList = createHTMLElement({ element: 'ul', className: 'program-features-list' });
        
        programData.features.forEach(feature => {
            const featureItem = createHTMLElement({ element: 'li', className: 'program-feature-item', text: feature });
            featuresList.append(featureItem);
        })

        programsList.append(program(programData.image, programData.title, programData.extra, featuresList));

    });

    programsWrapper.append(programFilter(), programsList);
    return programsWrapper;
}