source ./configs.sh

[ -d $deployPath ] || git clone $gitRepo $deployPath

git fetch origin
git checkout -f master
git reset --hard origin/master
