const tasklist = require('tasklist');
const taskkill = require('taskkill');

tasklist().then(tasks => {
    var wctProcesses = tasks
        .filter(t => t.imageName == "chrome.exe")
        .map(t => t.pid);

    taskkill(chrome).then(() => {
        console.log('done');
        console.log(`Successfully terminated ${chrome.join(', ')}`);
    });
});