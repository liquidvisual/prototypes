# PROTOTYPES

The public facing site is currently located at:
[http://prototypes.uat.liquidvisual.net](http://prototypes.uat.liquidvisual.net)

---

## Documentation

- For more in-depth information visit the [official documentation](http://prototypes.uat.liquidvisual.net/docs/).

- For the compiled version of 'prototypes' switch over to the [github-pages branch](https://github.com/liquidvisual/prototypes/tree/gh-pages).


## Quick Start

This project is built with [Jekyll 2.5.3](http://jekyllrb.com) - a static site generator. It also uses [Grunt.js](http://gruntjs.com) - a JavaScript task runner and [Bower](http://bower.io) for package management. This workflow was scaffolded with a [Yeoman](http://yeoman.io) generator called [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) which simply automates the process of setting it all up.

### On Mac:

You may need to install Ruby, Ruby Gems, NodeJS & Git. There are detailed instructions on the [Jekyll](http://jekyllrb.com/docs/installation/) website.

    git clone git@github.com:liquidvisual/prototypes.git
    cd prototypes
    bundle install
    npm install
    bower install
    ulimit -n 10240 # raise limit of files watchable if OSX
    grunt serve
    # => Now browse to http://localhost:9292

For production:

    grunt build # => to concat and minify etc. Creates './dist' folder.

### On Windows:

Jekyll is very easy to set up on Mac OS X or Linux. On Windows, not so much. These resources should help:

[Jekyll Docs on Windows](http://jekyllrb.com/docs/windows/#installation)
[Step by Step Guide](http://jekyll-windows.juthilo.com)