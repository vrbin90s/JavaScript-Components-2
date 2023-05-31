import { FORM_DATA } from "../config.js";
import createHTMLElement from "../functions.js";

export default function filterForm(){
    const form = createHTMLElement({ element: 'form', className: 'programs-filter-form'});
    const programsFound = createHTMLElement({ element: 'span', className: 'programs-found', text: 'Rastos 48 programos'});
    const filterButton = createHTMLElement({ element: 'input', className: 'button-primary', value: 'Filtruoti', type: 'submit'});
    const resetButton = createHTMLElement({ element: 'input', className: 'button-secondary', value: 'Išvalyti', type: 'submit'});
    

    FORM_DATA.forEach(data => {
        const formControlCourses = createHTMLElement({ element: 'div', className: 'form-control' });
        const formControlLocation = createHTMLElement({ element: 'div', className: 'form-control' });
        const formControlType = createHTMLElement({ element: 'div', className: 'form-control' });

        const courseSelect = createHTMLElement({ element: 'select', id: 'type-select'});
        const courseLabel = createHTMLElement({ element: 'label', labelFor: 'course-select', text: 'Tema'} );
        const locationSelect = createHTMLElement({ element: 'select', id: 'type-select'});
        const locationLabel = createHTMLElement({ element: 'label', labelFor: 'location-select', text: 'Vieta'} );
        const typeSelect = createHTMLElement({ element: 'select', id: 'type-select'});
        const typeLabel = createHTMLElement({ element: 'label', labelFor: 'type-select', text: 'Tipas'} );
        
        
        data.courses.forEach(course => {
            const option = createHTMLElement({ element: 'option', text: course});
            courseSelect.append(option);
        })

        data.locations.forEach(location => {
            const option = createHTMLElement({ element: 'option', text: location});
            locationSelect.append(option);
        })

        data.types.forEach(type => {
            const option = createHTMLElement({ element: 'option', text: type});
            typeSelect.append(option);
        })

        formControlCourses.append(courseLabel, courseSelect);
        formControlLocation.append(locationLabel, locationSelect);
        formControlType.append(typeLabel, typeSelect);

        const fieldset = createHTMLElement({ element: 'fieldset' });
        const legend = createHTMLElement({ element: 'legend', text: 'Laikas' });
        fieldset.append(legend);

        data.times.forEach(time => {
            const formControl = createHTMLElement({ element: 'div', className: 'form-control' });
            const input = createHTMLElement({ element: 'input', id: 'time-variation-1', name: 'time', type: 'checkbox' });
            const label = createHTMLElement({ element: 'label', labelFor: 'time-variation-1', text: time });
            formControl.append(input, label);
            fieldset.append(formControl);
        });
        
        programsFound.append(formControlCourses, formControlLocation, formControlType, fieldset);

    });

    form.append(programsFound, filterButton, resetButton);

    return form;
}
