source ./configs.sh

if which wkhtmltox >/dev/null; then
    echo 'wkhtmltox exists'
else
    echo 'wkhtmltox does not exist'
    sh ./installWkhtmltox.sh
fi
