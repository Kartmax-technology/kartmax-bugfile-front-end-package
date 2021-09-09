# First Time Setup

- If this is the first time that you are setting up your project to install private repositories as npm package, please make sure to set up your project first.
- For setting up the project, please read the steps from [here](https://postscripts.medium.com/npm-install-packages-from-github-9ec5c6fd0058)

# Package installation

- Open a terminal in your root folder of your project.
- Run
    ```
  npm install git+https://<token-from-github>:x-oauth-basic@github.com/Kartmax-technology/kartmax-bugfile-front-end-package.git --save
    ```
    
    OR (if the above doesn't work)
    
    ```
  npm install https://github.com/Kartmax-technology/kartmax-bugfile-front-end-package.git
    ```
   
- Once the installation is complete, you shall have the package in your node modules folder.

[![Kartmax Front-end Bugfile](https://img.youtube.com/vi/NJukhVAUIRw/0.jpg)](https://www.youtube.com/watch?v=NJukhVAUIRw)

# Global error handling Usage

- Simply import the component in any of your main.js file.
    ```
    import {bugFileFunction} from "node_modules/...."
    ```
- Real Example (Relative Path): 
  ```
  import {bugFileFunction}  from "../node_modules/@kartmax-technology/kartmax-bugfile-front-end-package/bugFile.js"; 
  ```
- Copy all these function and place it in your root file inside script tag  
  ```
   Vue.config.errorHandler = (error, vm, info) => {
         let config = {
            key: "QHixYrGS9EHSZqLJSXCwduKj1lC9Dv7NIl95GN9vPmXVm12vzj9KKUpHzQzIYA6j", //(bugfile key)
            user : "Aakanksha",
            logger: "Admin",
            source: "warning",
            severity: 4,
            properties : "-"
        }
        bugFileFunction.typeErr(config,error, vm, info)
    };

   Vue.config.warnHandler = function(msg, vm, trace) {
          let config = {
            key: "QHixYrGS9EHSZqLJSXCwduKj1lC9Dv7NIl95GN9vPmXVm12vzj9KKUpHzQzIYA6j",
            user : "Aakanksha",
            logger: "Admin",
            source: "warning",
            severity: 4,
            properties : "-"
        }
        bugFileFunction.warning(config,msg, vm, trace)
    }
   
   window.addEventListener("unhandledrejection", function (event) {
         let config = {
            key: "QHixYrGS9EHSZqLJSXCwduKj1lC9Dv7NIl95GN9vPmXVm12vzj9KKUpHzQzIYA6j",
            user : "Aakanksha",
            logger: "Admin",
            source: "warning",
            severity: 4,
            properties : "-"
        }
        event.promise
        .then(function (res) {
        })
        .catch(function (err) {
        bugFileFunction.network(config,err.config, err.message);
        });
    });
  ```

# Contextual Error handling

- If you wish to catch an exception that might occur during any axios call or simple calculation at client side,
just use a try-catch and inside catch, call the bugfileFunction, this shall log the bug onto server.
```
get_menu: function () {
      axios
        .get(
          this.$root.api_url +
            `/pim/pimresponse.php?service=menu&store=${this.$root.store}`
        )
        .then((response) => {
          response.data.result.forEach;
          this.$root.menu = response.data.result;
        })
        .catch((error) => {
          if (error.message === "Network Error") {
            this.$root.error_message =
              "Oops there seems to be some Network issue, please try again.";
          }
            let config = {
                key: "QHixYrGS9EHSZqLJSXCwduKj1lC9Dv7NIl95GN9vPmXVm12vzj9KKUpHzQzIYA6j",
                user : "Aakanksha",
                logger: "Admin",
                source: "warning",
                severity: 4,
                properties : "-"
            }
           bugFileFunction.network(config,error.config, error.message);
          window.scrollTo(0, 0);
        });
    },
```
