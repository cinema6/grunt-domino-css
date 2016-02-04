/*
 * grunt-domino-css
 * https://github.com/cinema6/grunt-domino-css
 *
 * Copyright (c) 2016 Reelcontent, Inc.
 * Licensed under the MIT license.
 */

'use strict';

var compile = require('domino.css/compiler');

var DESCRIPTION = 'Compiles CSS into domino.css rules scripts.';

module.exports = function(grunt) {
    grunt.registerMultiTask('domino_css', DESCRIPTION, function domino_css() {
        this.files.forEach(function writeFile(file) {
            grunt.file.write(file.dest, compile(grunt.file.read(file.src)));
            grunt.log.ok(file.src + ' > ' + file.dest);
        });
    });
};
