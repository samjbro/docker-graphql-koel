#!/bin/bash

if [[ "$TRAVIS_BRANCH" != "master" && "$TRAVIS_PULL_REQUEST" = true ]] ; then
  echo "Skipping push to Docker since we're not on the master branch"
  exit 0
else
echo "not skipping"
# Build images
  docker build -t samjbro/koel-nginx ./nginx
  docker build -t samjbro/koel-client ./client
  docker build -t samjbro/koel-api ./api
# Log in to the Docker CLI
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
# Push images to Docker Hub
  docker push samjbro/koel-nginx
  docker push samjbro/koel-client
  docker push samjbro/koel-api
fi