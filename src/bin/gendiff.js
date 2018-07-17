#!/usr/bin/env node
import commander from '../commander';
import gendiff from '../';

commander.parse(process.argv);
console.log(gendiff(...commander.args));
