/**
 * Written on April 6, 2018
 * Checks the CPU cores and RAM memory of the processor
 * @author Rupendra MAHARJAN
 */
const os = require('os');
const numOfCore=2;
const totalRAM = 2;

function checkSystem() {
    console.log('Checking your system...');
    let totalMemInGB = os.totalmem() / (1024 * 1024 * 1024);
    let totalOS = os.cpus();
    console.log(totalMemInGB < totalRAM ?
        'This app needs at least 2GB of RAM' :
        'Total Memory(RAM): ' + totalMemInGB.toFixed(1) + ' GB.');

    console.log((totalOS.length < numOfCore) ?
        'Processor Not Supported' :
        'Number of cores: ' + totalOS.length);

    console.log(totalMemInGB > totalRAM && totalOS.length>=numOfCore?
    'System is checked successfully' :
    'Insufficient system');
}

checkSystem();