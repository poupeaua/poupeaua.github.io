# used for final test to make sure that the generated files
# are equal with what we have had since now using the command
# hugo server. It is an extra way to ensure what goes on prod is good!

PORT=1313
URL=http://localhost
hugo --baseURL ${URL}:${PORT}/
cd docs
python3 -m http.server ${PORT}
cd ..
rm -r docs/