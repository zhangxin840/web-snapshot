#!/bin/bash
echo 'Installing Chinese language'
sudo apt-get install language-pack-zh-hant language-pack-zh-hans # Install language pack
sudo chmod 777 /var/lib/locales/supported.d/local
cat /usr/share/i18n/SUPPORTED | grep zh_ >> /var/lib/locales/supported.d/local # Add to supported list
sudo chmod 444 /var/lib/locales/supported.d/local
sudo locale-gen
