'use strict';

var grunt = require('grunt');
var compiler = require('domino.css/compiler');

describe('grunt domino_css', function() {
    describe('with no options', function() {
        it('should create the files', function() {
            expect(grunt.file.exists(__dirname, '../../.tmp/override.css.domino.js')).toBe(true, 'override.css.domino.js');
            expect(grunt.file.exists(__dirname, '../../.tmp/styles.css.domino.js')).toBe(true, 'styles.css.domino.js');
        });

        it('should populate the files with domino rules', function() {
            expect(grunt.file.read(require.resolve('../../.tmp/override.css.domino.js'))).toBe(compiler(grunt.file.read(require.resolve('../fixtures/override.css'))), 'override.css.domino.js');
            expect(grunt.file.read(require.resolve('../../.tmp/styles.css.domino.js'))).toBe(compiler(grunt.file.read(require.resolve('../fixtures/styles.css'))), 'styles.css.domino.js');
        });
    });
});
