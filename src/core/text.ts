import {View} from "./dom";

export class TextView extends View{
    /**
     * The header
     * @param level
     * @param className
     * @constructor
     */
    public static Header = (level: number = 1, className: string = "") => new TextView(className, "h" + level);

    /**
     * Root class name
     * @param className
     * @param tag
     */
    constructor(className: string = "", tag: string = "div") {
        super(tag, className);
    }

    /**
     * Returns the inner text
     * @param text
     */
    public setText(text: string){
        this.getBody().innerText = text;
        return this;
    }

    /**
     * Returns the inner text
     */
    public getText(): string{
        return this.getBody().innerText;
    }
}