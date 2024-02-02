# used to test the latest version of hugo before working with it for real
DOCKER_IMAGE=user/my-site:test
DOCKER_CONTAINER=my-site-test-container
DOCKER_IMAGE_ID=$(docker images user/my-site:test --format "{{.ID}}")
docker image rm $DOCKER_IMAGE_ID || (echo "Image $DOCKER_IMAGE didn't exist so not removed."; exit 0)
docker build . -t $DOCKER_IMAGE --progress plain
docker run -p 8080:80 --name $DOCKER_CONTAINER --rm $DOCKER_IMAGE
