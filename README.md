# ExploWeb
## (FrontEnd)

### Introduction
This repository hosts the code for Web Interface of Recommender System. Using Angular web framework, this project aims to develop a REST API to be consumed by this project.

### Prerequisites
- Node.js
- npm package manager

### Setting Up Env.
1. Setting the virtual enviornment
    - Install virtualenv, virtualenvwrapper(optional)
    ```shell
    pip install virtualenv
    pip install virtualenvwrapper
    ```
    -Add the following variable to .bashrc
    ```shell
    export WORKON_HOME=~/.virtualenv
    . /usr/local/bin/virtualenvwrapper_lazy.sh
    ```

    - For working with the virtual enviornment
        -Making a virtual enviornment :
        ```shell
        mkvirtualenv <env_name>
        ```
        - Activating the enviornment :
        ```shell
        workon <env_name>
        ```
        -Deactivating the enviornment : 
        ```shell
        deactivate
        ```
        -Listing the installed packages :
        ```shell
        lssitepackages
        ```
        -Removing a virtual enviornment :
        ```shell
        rmvirtualenv <env_name>
        ```
        -For further reading follow the given link :
            <https://virtualenvwrapper.readthedocs.io/en/stable/>

2. Installing Node.js
    Angular requires Node.js version 8.x or 10.x
    -To check your version, run node -v in a terminal/console window.
    -To get Node.js version 10.x refer to the following link and read the README
        <https://github.com/nodesource/distributions>

3. Installing Angular
    For installing angular refer to the following link:
        <https://angular.io/guide/quickstart>

### General Information 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Editor Configuration Settings