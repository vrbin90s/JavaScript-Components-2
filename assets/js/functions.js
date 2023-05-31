export default function createHTMLElement(options){

    const { element, text, className, url, append, src, value, type, id, labelFor, name } = options;

    const newDomElement = document.createElement(element);

    if(text) {
        newDomElement.textContent = text;
    }

    if(className) {
        if (Array.isArray(className)) {
            className.forEach(cn => newDomElement.classList.add(cn));
        } else {
            newDomElement.classList.add(className);
        }
    }

    if (url) {
        newDomElement.href = url;
    }

    if (append) {
        newDomElement.append(append);
    }
    if(src) {
        newDomElement.src = src;
    }
    if(value) {
        newDomElement.value = value;
    }
    if(type) {
        newDomElement.type = type;
    }
    if(id) {
        newDomElement.id = id;
    }
    if(labelFor) {
        newDomElement.setAttribute('for', labelFor);
    }
    if(name) {
        newDomElement.setAttribute('name', name);
    }

   return newDomElement;

}
