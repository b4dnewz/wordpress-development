/* eslint no-console: 0 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')
const pkg = require('./package.json')
const dirName = path.basename(__dirname)
if (dirName === pkg.name) {
  return
}

const envFile = path.resolve(__dirname, '.env')
if (fs.existsSync(envFile)) {
  console.log('The project has already been initialized\n')
  return
}

const rl = readline.createInterface({input: process.stdin, output: process.stdout})

rl.question(`What is your project name? (${dirName}) `, (answer) => {
  rl.close()
  answer = (answer && answer !== '')
    ? answer
    : dirName

  console.log('Creating the .env file from template')
  fs.copyFileSync(`${envFile}.example`, envFile)
  console.log('Removing template file .env.example')
  fs.unlinkSync(`${envFile}.example`)

  console.log('Updating .env variables using:', answer)
  const envVariables = fs.readFileSync(envFile, 'utf8')
  fs.writeFileSync(envFile, envVariables.replace('example.com', answer), 'utf8')

  console.log('Updating package.json variables')
  const newPkg = Object.assign({}, pkg, {
    name: answer,
    description: "",
    version: "0.1.0",
    author: ""
  })
  fs.writeFileSync(
    path.resolve(__dirname, 'package.json'),
    JSON.stringify(newPkg, null, 2),
    'utf-8'
  )
  console.log('Finished project initialization\n');
})
