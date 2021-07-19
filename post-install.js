// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

 'use strict'

 var gentlyCopy = require('gently-copy')
 
 
 var filesToCopy = ['./bugFile.js']

 // User's local directory
 var userPath = '../'

 
 // Moving files to user's local directory
 gentlyCopy(filesToCopy, userPath, {overwrite: true})
 
