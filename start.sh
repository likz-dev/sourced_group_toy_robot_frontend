#!/bin/bash
app="toy_robot_frontend.test"
docker build -t ${app} .
docker run -d --env API_URL=test_test -p 80:80 ${app}
