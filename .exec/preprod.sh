# used for final test to make sure that the generated files
# are equal with what we have had since now using the command
# hugo server. It is an extra way to ensure what goes on prod is good!

source .env
hugo --baseURL ${LOCALHOST_URL}:${PREPROD_PORT}/
cd docs
python3 -m http.server ${PREPROD_PORT}
cd ..
rm -r docs/