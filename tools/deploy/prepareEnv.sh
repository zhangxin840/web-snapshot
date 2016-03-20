#!/bin/bash

if locale -a | grep zh_CN; then
    echo 'Have Chinese language'
else
    echo 'No Chinese language'
    sh ./installChinese.sh
fi

if which wkhtmltoimage >/dev/null; then
    echo 'wkhtmltox exists'
else
    echo 'wkhtmltox does not exist'
    sh ./installWkhtmltox.sh
fi
