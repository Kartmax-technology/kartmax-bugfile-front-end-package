# First Time Setup

- If this is the first time that you are setting up your project to install private repositories as npm package, please make sure to set up your project first.
- For setting up the project, please read the steps from [here](https://postscripts.medium.com/npm-install-packages-from-github-9ec5c6fd0058)

# Package installation

- [CRITICAL] Make sure you have access to this Github Repo in the first place.
- Open a terminal in your root folder of your project.
- Run
    ```
  npm install https://github.com/Kartmax-technology/kartmax-search-front-end-package.git
    ```
- Once the installation is complete, you shall have a bugFile.js file in root.
- Paste these function in main.js file
    - import file
        import {bugFileFunction} from  "../bugFile.js";
      
    1. Vue.config.errorHandler = (error, vm, info) => {
        bugFileFunction.typeErr(error, vm, info)
    };

    2. Vue.config.warnHandler = function(msg, vm, trace) {
        bugFileFunction.warning(msg, vm, trace)
    }
    3. window.addEventListener("unhandledrejection", function (event) {
        event.promise
        .then(function (res) {
        })
        .catch(function (err) {
        bugFileFunction.network(err.config, event.reason);
        });
    });

