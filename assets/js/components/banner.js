import createHTMLElement from "../functions.js";

export default function banner(text1, text2) {
    const banner = createHTMLElement({ element: 'div', className: 'banner' });
    const bannerLink = createHTMLElement({ element: 'a', className: 'banner-link', url: '#' });
    const bannerTitle = createHTMLElement({ element: 'div', className: 'banner-title'});
    text1 = createHTMLElement({ element: 'span', className: 'color-pink', text: text1 + ' ' });

    if(text2) {
        text2 = createHTMLElement({ element: 'span', className: 'color-black', text: text2 });
    }

    const arrowIcon = createHTMLElement({ element: 'div', className: 'arrow-icon'});
    arrowIcon.innerHTML = `<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="33">
    <path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fill-rule="evenodd"/>
    </svg>`; 

    bannerTitle.append(text1, text2);
    bannerLink.append(bannerTitle, arrowIcon);
    banner.append(bannerLink);

    return banner;
}