#!/bin/bash
source ./configs.sh

cd $deployPath

nvm install 5.8.0
nvm use 5.8.0

npm install --production
npm start
