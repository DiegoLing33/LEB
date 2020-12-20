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

import {XVariant} from "./consts/XStyle";

export default class CoreView<T extends HTMLElement = HTMLElement> {
    protected body: T;

    constructor(body: T) {
        body.dataset['obj'] = this.constructor.name;
        this.body = body;
    }

    /**
     * Returns the dom
     */
    getBody(): T {
        return this.body;
    }

    /**
     * Adds the sub view
     * @param view
     */
    public addSubView(...view: CoreView[]) {
        view.forEach(v => this.getBody().append(v.getBody()));
        return this;
    }

    /**
     * Removes everything from this element
     * @warning be careful with this method
     */
    protected removeAllSubViews() {
        this.getBody().innerHTML = "";
        return this;
    }

    /**
     * Sets the classname
     * @param className
     */
    public setClassName(className: string) {
        this.getBody().className = className;
        return this;
    }

    /**
     * Sets the style
     * @param obj
     */
    public setStyle(obj: Record<keyof CSSStyleDeclaration | string, any>) {
        Object.keys(obj).forEach(key => this.getBody().style[key as any] = obj[key]);
        return this;
    }

    public setVariant(variant: XVariant) {
        this.getBody().dataset['variant'] = variant;
        return this;
    }

    public setWidth(width: number | string) {
        const v = typeof width === "number" ? width + 'px' : width;
        return this.setStyle({width: v});
    }

    public setHeight(height: number | string) {
        const v = typeof height === "number" ? height + 'px' : height;
        return this.setStyle({height: v});
    }

    public getWidth() {
        return this.getBody().offsetWidth;
    }

    public getHeight() {
        return this.getBody().offsetHeight;
    }
}