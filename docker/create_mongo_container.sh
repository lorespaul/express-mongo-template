#!/bin/bash

docker run -d --name my-mongo -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=betacom1 -e MONGO_INITDB_DATABASE=betanft -v c:/hostmounts/mongodb:/data/db -p 27017:27017 mongo