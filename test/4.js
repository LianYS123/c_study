const cp = require('child_process');
cp.execFile('./test/test.js', (err, stdout, stderr) => {
  if (err) {
    console.log('...')
    console.log(err);
  }
  if (stderr) {
    console.log('...')
    console.log(stderr);
  }
  console.log('-'.repeat(100))
  console.log(stdout);
  console.log(typeof stdout)
  console.log(stdout.length)
  console.log('-'.repeat(100))
});
