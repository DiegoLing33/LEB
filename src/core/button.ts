import {View} from "./dom";

export default class Button extends View{
    constructor(text: string) {
        super("button", 'x-button');
        this.setText(text);
    }

    /**
     * Sets the inner text
     * @param text
     */
    public setText(text: string){
        this.getBody().innerText = text;
        return this;
    }

    /**
     * Returns the inner text
     */
    public getText(){
        return this.getBody().innerText;
    }
}