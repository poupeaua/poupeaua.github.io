include .env

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
	@echo "Deployed on port ${TEST_PORT}"
	hugo server -D --baseURL ${LOCALHOST_URL}:${TEST_PORT}/

preprod:
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Testing the website in pre-production mode: The website will render as-is in the production environment"
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Deployed on port ${PREPROD_PORT}"
	# auto cleaning of directory docs/ after CTRL-C in Make
	bash -c "trap 'rm -r docs/' EXIT; bash .exec/preprod.sh"

latest:
	@echo "---------------------------------------------------------------------"
	@echo "Testing the latest version of Hugo using the latest Hugo Docker Image"
	@echo "---------------------------------------------------------------------"
	@echo "This is useful to test that the new version of Hugo does not break your website before downloading it and working with it for real"
	@echo "Deployed on port ${DOCKER_PORT} so that you can have both the website on the current Hugo version on port ${TEST_PORT} and the latest Hugo version on port ${DOCKER_PORT} to compare"
	docker image rm ${DOCKER_IMAGE_ID} || (echo "Image ${DOCKER_IMAGE} didn't exist so not removed."; exit 0)
	docker build . -t ${DOCKER_IMAGE} --progress plain
	docker run -p ${DOCKER_PORT}:80 --name ${DOCKER_CONTAINER} --rm ${DOCKER_IMAGE}