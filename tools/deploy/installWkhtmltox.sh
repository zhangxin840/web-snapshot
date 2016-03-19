source ./configs.sh

echo 'Installing wkhtmltox'

[ -d $installPath ] || mkdir -p $installPath
cd $installPath

wget -O $installPath/wk.tar.xz 'http://download.gna.org/wkhtmltopdf/0.12/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz'
sudo rm -rf $installPath/wkhtmltox >/dev/null
tar xvfJ $installPath/wk.tar.xz $installPath
sudo rm -rf $installPath/wk.tar.xz

export PATH=$PATH:$installPath/wkhtmltox/bin

if which wkhtmltoimage >/dev/null; then
  echo 'Install wkhtmltox success'
else
  echo 'Install wkhtmltox error'
  exit 1
fi
