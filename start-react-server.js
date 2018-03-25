/** Runs 'npm start' in the client directory */
const args = ['start'];
const opts = { stdio: 'inherit', cwd: 'react-server', shell: true };
require('child_process').spawn('npm', args, opts);