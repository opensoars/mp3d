"use strict";

const express = require('express');

const port = 3333;

express().use(express.static(__dirname + '/../public')).listen(port);

console.log(`Listening @ localhost:${ port }`);