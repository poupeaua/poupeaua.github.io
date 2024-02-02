
LOCALHOST_URL=http://localhost
HUGO_VERSION="0.122.0"
HUGO_DEB_RELEASE_FILE=hugo_${HUGO_VERSION}_linux-amd64.deb
DOCKER_IMAGE=user/my-site:test
DOCKER_CONTAINER=my-site-test-container
DOCKER_IMAGE_ID=$(docker images $DOCKER_IMAGE --format "{{.ID}}")

clean:
	@echo "------------------"
	@echo "Cleaning operation"
	@echo "------------------"
	rm .hugo_build.lock || true
	rm ${HUGO_DEB_RELEASE_FILE} || true

install:
	@echo "----------------------------------------"
	@echo "Installing Hugo version v${HUGO_VERSION}"
	@echo "----------------------------------------"
	@echo "We suppose you work on ubuntu or debian (for windows use WSL)"
	wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_DEB_RELEASE_FILE}
	sudo dpkg -i ${HUGO_DEB_RELEASE_FILE}
	dpkg -s hugo
	hugo version
	@echo "Successfully installed Hugo version ${HUGO_VERSION}!"

local:
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Testing the website in local for quick test with changes in code automatically applied in rendered website"
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Deployed on port 1313"
	hugo server -D --baseURL ${LOCALHOST_URL}:1313/

preprod:
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Testing the website in pre-production mode: The website will render as-is in the production environment"
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Deployed on port 1313"
	# auto cleaning of directory docs/ after CTRL-C in Make
	bash -c "trap 'rm -r docs/' EXIT; sh .exec/preprod.sh"

docker:
	@echo "---------------------------------------------------------------------"
	@echo "Testing the latest version of Hugo using the latest Hugo Docker Image"
	@echo "---------------------------------------------------------------------"
	@echo "This is useful to test that the new version of Hugo does not break your website before downloading it and working with it for real"
	@echo "Deployed on port 8080"
	docker image rm ${DOCKER_IMAGE_ID} || (echo "Image ${DOCKER_IMAGE} didn't exist so not removed."; exit 0)
	docker build . -t ${DOCKER_IMAGE} --progress plain
	docker run -p 8080:80 --name ${DOCKER_CONTAINER} --rm ${DOCKER_IMAGE}