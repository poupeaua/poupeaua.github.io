# Personal Website

The objective of this website is to share my passions and productions.

## Sections

This website is divided into different sections :

- **Ecology**: The objective here is to display some sources, content and knowledge about THE most important topic (and really the only thing that matters) of our era : ecology and environmental information.
- **Magic**: As a card artist I would like to share content about this unknown but beautiful form of art.
- **Music**: As a musician, I wanted to share my share my compositions. Plus, as I give guitar courses to students, I wanted them to be able to access material such as courses, exercises, PDFs easily from anywhere with their smartphone and computer devices.
- **Painting**: From time to time I paint, so I wanted to be able to share my paintings with you.
- **Pro**: The objective in this page is to display information about my job, my resume and other professional related stuff.

## Technical Details

### Local development

1. For quick development and see changes as you code:

```
make local
```  

2. For final tests to verify how it will be rendered in production:

```
make preprod
```

3. To test a new Hugo version in an isolated Docker environment to check for eventual breaking changes before updating Hugo for good:

```
make latest
```

### CI/CD

You just have to push the code in master. Two Github Actions CI/CD pipelines take care of the rest:

1. A first pipeline installs hugo in the expected version, builds the website and pushes the content of website in the branch called *gh-pages*.

2. A second pipeline executes then based on the automatic push on the *gh-pages*. This one deploys for real the website in production and make it available online.

### Hugo Version

See all the release of Hugo framework here: https://github.com/gohugoio/hugo/releases

hugo version currently used: 
hugo v0.142.0+extended+withdeploy darwin/arm64 BuildDate=2025-01-22T12:20:52Z VendorInfo=brew