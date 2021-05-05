#!/bin/bash
app="toy_robot_frontend.test"
docker build --build-arg api_url=http://localhost:5000 -t ${app} .
docker run -d -e "API_URL=test_test" -p 80:80 ${app}
