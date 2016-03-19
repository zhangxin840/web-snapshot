source ./configs.sh

echo 'Installing wkhtmltox'

[ -d $installPath ] || mkdir -p $installPath
cd $installPath

sudo rm -rf $installPath/wkhtmltox
sudo rm -rf $installPath/wk.tar.xz
sudo rm -rf $binPath/wkhtmltoimage

wget -O $installPath/wk.tar.xz 'http://download.gna.org/wkhtmltopdf/0.12/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz'
tar xvfJ $installPath/wk.tar.xz
sudo rm -rf $installPath/wk.tar.xz

sudo cp $installPath/wkhtmltox/bin/wkhtmltoimage $binPath

if which wkhtmltoimage >/dev/null; then
  echo 'Install wkhtmltox success'
else
  echo 'Install wkhtmltox error'
  exit 1
fi
