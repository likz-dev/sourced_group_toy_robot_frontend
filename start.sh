#!/bin/bash
app="toy_robot_frontend.test"
docker build --no-cache -t ${app} .
docker run -d -p 80:8080 ${app}
