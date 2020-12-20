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

import {View} from "./core/dom";
import {TextView} from "./core/text";
import ImageView from "./core/image";

// Styles
import "./style/style.scss";
import "./core/style/index.scss";

// Images
import leb from "./assets/leb.png";
import Button from "./core/button";
import {XFlex} from "./core/layout/Flex";


const $wrapper = View.withId("wrapper");

// Components
const image = new ImageView().setImageSource(leb).setWidth(100).setHeight(100);
const headerText = TextView.Header().setText("Hello, world!");
const text = new TextView().setText("I created with LEB and XView light-weight framework!");
const button = new Button("Click me");
const buttonSuccess = new Button("Click me").setVariant("success");

const buttons = XFlex().setItemsPadding('middle');
buttons.addSubView(button, buttonSuccess);

$wrapper.addSubView(image, headerText, text, buttons);
