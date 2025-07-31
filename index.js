const koffi = require('koffi');
const win32 = require('win32');
const win32Api = require('win32-api');
const libwin32 = require('libwin32');
const refNapi = require('ref-napi');
const screenManager = require('./lib/screenManager');

class Agora {
    constructor() {
        this.koffi = koffi;
        this.win32 = win32;
        this.win32Api = win32Api;
        this.libwin32 = libwin32;
        this.refNapi = refNapi;
    }
    
}

module.exports = {
    Agora
};