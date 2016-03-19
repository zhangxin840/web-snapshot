# web-snapshot

## Install dependencies

- Install [wkhtmltoimage](http://wkhtmltopdf.org/) on your system
- Install Node 0.12
- npm install

## Run server

- npm start

## Usage

- /update?url=: Take a new snapshot
- /show?url=: Get the latest snapshot of a url

## Deploy on Heroku

- Add the buildpack: heroku buildpacks:add https://github.com/homelight/wkhtmltox-buildpack.git
- Redeploy app: git push heroku master

## Deploy on IaaS

- Upload tools/deploy to server
- sh deploy.sh
