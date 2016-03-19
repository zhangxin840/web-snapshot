source ./configs.sh

[ -d $deployPath ] || git clone $gitRepo $deployPath
git checkout -f master
