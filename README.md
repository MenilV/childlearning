child learning backend app
===========================

Child learning app, RESTful API with NodeJS and Restify and MongoDB

Mongo setup:
===========================
	Linux:
		* sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
		* echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
		* sudo apt-get update
		* sudo apt-get install -y mongodb-org
	Run/stop mongod:
		* sudo service mongod start
		* sudo service mongod stop
	=======================
	OSX:
		* brew install mongodb
	Run mongod:
		* mongod
	=======================
	Windows:
		* wmic os get caption
		* wmic os get osarchitecture
		* download "msiexec.exe" 
		* msiexec.exe /q /i mongodb-win32-x86_64-2008plus-ssl-3.2.7-signed.msi ^ INSTALLLOCATION="C:\mongodb" ^ ADDLOCAL="all"
        * md \data\db
    Run/stop mongod :
    	* C:\mongodb\bin\mongod.exe or
    	* net start MongoDB
    	* net stop MongoDB


Node setup:
==========================
	* install NodeJs
	* run 'npm install' from the directory where 'package.json' is located to get dependencies
	* run 'node server.js' or 'nodemon server.js' for autorestart
==========================

Added OpenShift