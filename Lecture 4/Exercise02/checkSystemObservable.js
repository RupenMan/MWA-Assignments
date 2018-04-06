/**
 * Written on April 6, 2018
 * Uses Observable Pattern to solve the problem about system requirement for CPU
 * @author Rupendra MAHARJAN
 */

const Rx = require('rxjs/Rx');
const os = require('os');

const numOfCore = 2;
const totalRAM = 2;
const totalMemInGB = os.totalmem() / (1024 * 1024 * 1024);
const totalOS = os.cpus();

var source = Rx.Observable.create(function (cpuInfo) {
    cpuInfo.next([totalMemInGB < totalRAM, totalOS.length < numOfCore]);
    cpuInfo.error([!(totalMemInGB < totalRAM), !(totalOS.length < numOfCore)]);
});

var subscription = source.subscribe(
    function ([memStatus, osStatus]) {
        if (memStatus) { console.log('This app needs at least ' + totalRAM + ' GB of RAM '); }
        if (osStatus) { console.log('Processor Not Supported'); }
    },
    function ([memStatus, osStatus]) {
        if (memStatus) { console.error('Total Memory(RAM): ' + totalMemInGB.toFixed(1) + ' GB.'); }
        if (osStatus) { console.error('Number of cores: ' + totalOS.length); }
        if (memStatus && osStatus) { console.error('System Checked successfully.'); }
    });

subscription.unsubscribe();