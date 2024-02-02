# used for final test to make sure that the generated files
# are equal with what we have had since now using the command
# hugo server. It is an extra way to ensure what goes on prod is good!
hugo --baseURL http://localhost:1313/
cd docs
python3 -m http.server 1313
cd ..
rm -r docs/