# Particle Jekyll Theme

This project is based on [acarjungowda](https://github.com/acarjungowda/acarjungowda.github.io)'s fork of [nrandecker/particle](https://github.com/nrandecker/particle) and is used as a template for my portfolio.  
This is a simple and minimalist template for Jekyll designed for developers that want to show of their portfolio.

![](./welcome_page.jpg)

The Theme features:

- Gulp
- SASS
- Sweet Scroll
- Particle.js
- BrowserSync
- Font Awesome and Devicon icons
- Google Analytics
- Info Customization

## Basic Setup

1. [Install Jekyll](http://jekyllrb.com)
2. Fork the [Particle Theme](https://github.com/nrandecker/particle/fork)
3. Clone the repo you just forked.
4. Edit `_config.yml` to personalize your site.

## Site and User Settings

You have to fill some informations on `_config.yml` to customize your site.

```
# Site settings
description: A blog about lorem ipsum dolor sit amet
baseurl: "" # the subpath of your site, e.g. /blog/
url: "http://localhost:3000" # the base hostname & protocol for your site

# User settings
username: Lorem Ipsum
user_description: Anon Developer at Lorem Ipsum Dolor
user_title: Anon Developer
email: anon@anon.com
twitter_username: lorem_ipsum
github_username:  lorem_ipsum
gplus_username:  lorem_ipsum
```

**Don't forget to change your url before you deploy your site!**

## Color and Particle Customization
- Color Customization
  - Edit the sass variables
- Particle Customization
  - Edit the json data in particle function in app.js
  - Refer to [Particle.js](https://github.com/VincentGarreau/particles.js/) for help

## Running the blog in local

In order to compile the assets and run Jekyll on local you need to follow those steps:

- Install [NodeJS v10.20.1](https://nodejs.org/)
- Run `npm install`
- Run `gulp`

### Running Jekyll/Gulp on Docker (preferred)

- To run Jekyll serve (build site real time and host), run `./jekyll-docker-serve.sh`
- To run Gulp (TODO)

## Credits

This theme is developed by 
- [Nathan Randecker](https://github.com/nrandecker/particle)

