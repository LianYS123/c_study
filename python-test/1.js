const cp = require('child_process')
const execFile = () => {
    return new Promise((resolve, reject) => {
        cp.execFile('./6.py', (err, stdout, stderr) => {
            err = err || stderr
            if(err) {
                reject(err);
            } else {
                resolve(stdout)
            }
        })
    })
}
execFile().then(console.log).catch(console.error)