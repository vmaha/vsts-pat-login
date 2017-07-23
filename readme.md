# Blog

[In Progress] Website for my blog

# Ops

[![Build Status](https://travis-ci.org/vmaha/dbproto.svg?branch=master)](https://travis-ci.org/vmaha/dbproto)

# Dev

## Build & deploy locally

    git clone ...
    npm install
    npm start

    // Deployed to http://localhost:8080/

## Deploy to production

    git push master

    // This will trigger a travis build which (upon success) will deploy to Azure. 
    // Deployed to http://compass-prototypes.azurewebsites.net

## Update npm packages to latest versions

    npm install -g npm-check-updates
    ncu -u

## Add an npm package without breaking TypeScript 

    npm install --save-dev {package}
    npm install --save-dev @types/{package}
