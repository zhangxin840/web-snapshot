#!/bin/bash
source ./configs.sh

[ -d $deployPath ] || git clone $gitRepo $deployPath

git fetch origin
git checkout -f $releaseBranchName
git reset --hard origin/$releaseBranchName
git clean -dff # Remove untracked files
