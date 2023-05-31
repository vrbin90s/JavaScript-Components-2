import createHTMLElement from "../functions.js";

export default function program(image, title, extraInfo, features) {
    const programItem = createHTMLElement({ element: 'div', className: 'program-item' });
    const programLink = createHTMLElement({ element: 'a', url: '#' });
    const programMainInfo = createHTMLElement({ element: 'div', className: 'program-main-info', });
    const programImage = createHTMLElement({ element: 'img', className: 'program-image', src: image });
    const programTitle = createHTMLElement({ element: 'h2', className: 'program-title', text: title});
    const programDescription = createHTMLElement({ element: 'p', className: 'program-description' });

    const programFeaturesWrapper = createHTMLElement({ element: 'div', className: 'program-features-wrapper' });

    programFeaturesWrapper.append(features);
    const programExtraInfo = createHTMLElement({ element: 'span', className: 'program-extra-info', text: extraInfo });

    programMainInfo.append(programImage, programTitle, programDescription);
    programLink.append(programMainInfo, programFeaturesWrapper, programExtraInfo);
    
    programItem.append(programLink);

    return programItem;

}