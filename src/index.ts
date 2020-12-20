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

// Styles
import "./style/style.scss";

// Images
import leb from "./assets/leb.png";

// Wrapper
const $wrapper = document.getElementById("wrapper") as HTMLElement;

// Image
const $img = document.createElement("img");
$img.src = leb;
$img.width = 150;
$img.height = 150;
$wrapper.append($img);

// H1
const $h1 = document.createElement("h1");
$h1.innerText = "Hello, world!";
$wrapper.append($h1);

const $div = document.createElement("div");
$div.innerText = "I created with LEB and I feel me good!";
$wrapper.append($div);