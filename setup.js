/* eslint no-console: 0 */

const fs = require('fs')
const path = require('path')
const del = require('del');
const readline = require('readline')
const pkg = require('./package.json')
const execSync = require('child_process').execSync
const dirName = path.basename(__dirname)
if (dirName === pkg.name) {
  return
}

const envFile = path.resolve(__dirname, '.env')
if (fs.existsSync(envFile)) {
  console.log('The project has already been initialized\n')
  return
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Collect answers
const answers = {}

rl.question(`What is your project name? (${dirName}) `, (project) => {
  answers.projectName = (project && project !== '')
    ? project
    : dirName

  rl.question(`Which WordPress version do you want? (latest) `, (version) => {
    answers.wordpressVersion = (version && version !== '')
      ? version
      : 'latest'

    rl.close()

    const newPkg = Object.assign({}, pkg, {
      name: answers.projectName,
      description: "",
      version: "0.1.0",
      author: ""
    })

    const envVariables = fs.readFileSync(`${envFile}.example`, 'utf8')
      .replace('HOSTNAME=wordpress.development', `HOSTNAME=${answers.projectName}`)
      .replace('WORDPRESS_VERSION=latest', `WORDPRESS_VERSION=${answers.wordpressVersion}`)

    console.log('\nCreating the .env file')
    fs.writeFileSync(envFile, envVariables, 'utf8')
    fs.unlinkSync(`${envFile}.example`)

    console.log('Updating package.json variables')
    fs.writeFileSync(
      path.resolve(__dirname, 'package.json'),
      JSON.stringify(newPkg, null, 2),
      'utf-8'
    )

    try {
      del.sync('./.git')
      execSync('git init')
    } catch (e) {
      console.log('Failed to recreate git repostiory:');
      console.log(e.message);
    }

    console.log('Finished project initialization\n');
  })
})
