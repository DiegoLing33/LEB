/*
 * ██╗░░░░░██╗███╗░░██╗░██████╗░░░░██████╗░██╗░░░░░░█████╗░░█████╗░██╗░░██╗
 * ██║░░░░░██║████╗░██║██╔════╝░░░░██╔══██╗██║░░░░░██╔══██╗██╔══██╗██║░██╔╝
 * ██║░░░░░██║██╔██╗██║██║░░██╗░░░░██████╦╝██║░░░░░███████║██║░░╚═╝█████═╝░
 * ██║░░░░░██║██║╚████║██║░░╚██╗░░░██╔══██╗██║░░░░░██╔══██║██║░░██╗██╔═██╗░
 * ███████╗██║██║░╚███║╚██████╔╝░░░██████╦╝███████╗██║░░██║╚█████╔╝██║░╚██╗
 * ╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝
 *
 * Developed by Yakov V. Ling (C) Ling • Black 2020
 * @site http://ling.black
 */


import CoreView from "./core";

export class View<T extends HTMLElement = HTMLElement> extends CoreView<T> {
    public static withId<T extends HTMLElement = HTMLElement>(id: string){
        return new CoreView(document.getElementById(id) as T);
    }

    constructor(tag: string = "div", className: string = "") {
        super(document.createElement(tag) as T);
        this.setClassName(className);
    }
}

/**
 * Black view
 */
export class BlockView extends View{
    constructor(className: string = "") {
        super("div", className);
    }
}

/**
 * Black view
 */
export class InputView extends View<HTMLInputElement>{
    constructor(className: string = "") {
        super("input", className);
    }
}
