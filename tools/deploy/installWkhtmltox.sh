source ./configs.sh

echo 'Installing wkhtmltox'

[ -d $installPath ] || mkdir -p $installPath
cd $installPath

wget -O wk.tar.xz 'http://download.gna.org/wkhtmltopdf/0.12/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz'
sudo rm -rf wkhtmltox >/dev/null
tar xvfJ wk.tar.xz
sudo rm -rf wk.tar.xz

export PATH=$PATH:$installPath/wkhtmltox/bin

if which wkhtmltox >/dev/null; then
  echo 'Install wkhtmltox success'
else
  echo 'Install wkhtmltox error'
  exit 1
fi
