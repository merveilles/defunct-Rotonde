import fs from 'fs-extra';
import path from 'path';
import { spawn } from 'child_process';

const directory = path.join(__dirname, '../dist');
fs.mkdirs(directory, err => {
  if (err) {
    throw err;
  }
  const packageJsonPath = path.join(directory, 'package.json');
  const packageJson = {
    name: 'rotonde',
    scripts: {
      start: 'node index.js'
    },
    dependencies: {
      'rotonde-core': '^1.0.0'
    }
  };
  fs.writeFile(path.join(directory, 'index.js'), `require('rotonde-core/lib/index');`, err => {
    fs.writeJson(packageJsonPath, packageJson, err => {
      if (err) {
        throw err;
      }
      const now = spawn('now', [
        directory
      ], {
        stdio: 'inherit'
      });
      now.on('close', code => {
        console.log('done');
      });
    });
  });
});
