#!/usr/bin/env node

const minimist = require('minimist')
const generateName = require('project-name-generator')

const util = require('util')
// const spawn = util.promisify(require('child_process').spawn)
const spawn = require('child_process').spawn
const spawn2 = util.promisify(require('child_process').spawn)
const exec = util.promisify(require('child_process').exec)

const path = require('path')
const fs = require('fs')

const argv = minimist(process.argv.slice(2));
console.log(argv)

function generateProjectName() {
  return generateName({number: true}).dashed
}

let projectName = argv._[0]
if (!projectName) {
  projectName = generateProjectName()
} else {
  //
  // Allow existing directory: just append a generated project name to it
  //
  
  const isDirectorty = fs.existsSync(projectName) && fs.lstatSync(projectName).isDirectory()
  if (isDirectorty) {
    const randomName = generateProjectName()
    console.warn(`You speficied a directory as project name. Appending a random name for you: '${randomName}'`)
    projectName = path.resolve(projectName, randomName)
  }
}
console.log(projectName)

async function createReactApp() {
  return new Promise((resolve, reject) => {
    const cra = spawn('npx', ['create-react-app', projectName], { stdio: 'inherit' })
    cra.on('exit', code => {
      if (code !== 0) {
        reject(new Error('CRA failed'))
      }

      const abspath = path.resolve(projectName)
      resolve(abspath)
    })
  })
}

createReactApp().then(async (projectAbsolutePath) => {
  console.log(`🙌 Project ${projectAbsolutePath} successfully created!`)

  //
  // npm start
  //

  const PORT = 3000+Math.ceil(Math.random()*1000)
  spawn('npm', ['start'], {
    cwd: projectAbsolutePath,
    stdio: 'inherit',
    env: {
      ...process.env,
      PORT
    }
  })

  //
  // code .
  //

  const {stderr} = await exec('which code')
  if (!stderr) {
    spawn('code', ['--goto','src/App.js', projectAbsolutePath], {stdio: 'inherit'})
  }
  
}).catch(err => {
  console.error(err)
  process.exit(1)
})

