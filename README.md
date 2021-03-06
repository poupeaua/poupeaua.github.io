# Alexandre Poupeau Website

The objective of this website is to share my passions and productions.
The website is mainly focused on art (magic, music, painting).
However it is also a way to display other information such as professional info and other (ecology).

## Sections

This Website is divided into sections :

### Ecology

The objective here is to display some sources, content and knowledge about THE most important (and really the only thing that matters) in our era : ecology and environmental information.

### Magic

As a card artist I would like to share content about this unknown but beautiful form of art.

### Music

As a musician, I wanted to share my share my compositions. Plus, as I give guitar courses to students, I wanted them to be able to access material such as courses, exercises, PDFs easily from anywhere with their smartphone and computer devices.

### Painting

From time to time I paint, so I wanted to be able to share my paintings with you.

### Pro

The objective in this page is to display information about my job, my resume and other professional related stuff.

## Launch a test server with Hugo locally

```
hugo server -D --baseURL http://localhost:1313/
```  

For final tests, generate your local site and test it with :
```
./hugo_exec.sh
```

## Put in Production

1. Simply run the following command on master branch locally :

```
hugo
```

2. This will create static content in the docs/ directory. Finally push the code on master. Github action will do its job to expose the static content in the docs/ directory.