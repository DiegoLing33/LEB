import {View} from "./dom";

export default class ImageView extends View<HTMLImageElement> {
    constructor(className: string = "") {
        super("img", className);
    }

    /**
     * Sets the image url
     * @param src
     */
    public setImageSource(src: string) {
        this.getBody().src = src;
        return this;
    }
}

export function XImageView(className: string = "") {
    return new ImageView(className);
}