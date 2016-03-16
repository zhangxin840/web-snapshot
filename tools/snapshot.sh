url=http://output.jsbin.com/faroxoc
width=320

while true; do

current_time=$(date "+%Y.%m.%d-%H.%M.%S")
file_path=../public/images/namecard-$current_time.jpg

wkhtmltoimage --quality 100 --width $width $url $file_path

echo 'Screenshot saved:' $file_path
echo 'Waiting for another screenshot...'

sleep 3;

done
