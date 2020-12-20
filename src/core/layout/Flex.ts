import {View} from "../dom";
import {XSizes} from "../consts/XStyle";

export default class Flex extends View {

    constructor(className: string = "") {
        super('div', 'x-flex ' + className);
        this.setItemsPadding('small');
    }

    public setDirection(direction: 'column' | 'row' | 'column-reverse' | 'row-reverse' | 'inherit') {
        return this.setStyle({flexDirection: direction});
    }

    public alignCenter() {
        return this.setStyle({alignItems: 'center'});
    }

    public justifyCenter() {
        return this.setStyle({justifyContent: 'center'});
    }

    public setItemsPadding(size: XSizes){
        this.getBody().dataset['xsize'] = size;
        return this;
    }
}

/**
 * Creates the XFlex element
 * @param className
 * @constructor
 */
export function XFlex(className: string = "") {
    return new Flex(className);
}