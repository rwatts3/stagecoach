#!/usr/bin/env node
'use strict';

require ('babel-core/register');

const chalk       	= require('chalk');
const clear       	= require('clear');
const CLI         	= require('clui');
const figlet      	= require('figlet');
const inq    		= require('inquirer');
const Preferences 	= require('preferences');
const Spinner     	= CLI.Spinner;
const GitHubApi   	= require('github');
const _           	= require('lodash');
const git         	= require('simple-git')();
const touch       	= require('touch');
const files 		= require('./modules/files');
const cli 			= require('cli').enable('version');
const shell 		= require('shelljs');
const prompt 		= require('prompt');
const fs 			= require('fs');
const Worker 		= require('./modules/worker');

////////////////////CLI CONFIGURATION ////////////////////
cli.setApp('stagecoach', '0.1.0');

clear();
console.log(
  chalk.blue(
    figlet.textSync('Stagecoach', { horizontalLayout: 'full' })
  )
);

const options = {
    file:	['f', 'A file to process', 'file', 'temp.log'],
    time:	['t', 'An access time', 'time', false],
    work:	[false, 'What kind of work to do', 'string', 'sleep'],
	client: ['c', 'Client to Update', 'string', false]
};

const commands = [
	'test'
];

cli.parse(options, commands);


//////////////////////////////////////////////////////////

if (cli.command !== undefined) {
	Worker.process(cli);
} else {
	cli.warn(`You need to submit a command`);
}