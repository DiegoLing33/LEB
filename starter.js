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

const child_process = require("child_process");
const {createLogger, LType} = require("@ling.black/log");
const args = process.argv;

function createProcess(process, name){
    const logger = createLogger(name);
    logger.log("Запуск процесса...");

    process.stdout.on("data", data => logger.log(data));
    process.stderr.on("data", data => logger.error(data));
    process.on("close", () => logger.log('Завершено'));
}

if(args.includes('dev')){
    createProcess(child_process.spawn("yarn", ['start']), LType.info("Electron"));
    createProcess(child_process.spawn("yarn", ['src:watch']),  LType.danger("Sources"));
}