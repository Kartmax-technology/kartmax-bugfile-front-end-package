import Axios from "axios";

const defaultConfig = {
    key: "QHixYrGS9EHSZqLJSXCwduKj1lC9Dv7NIl95GN9vPmXVm12vzj9KKUpHzQzIYA6j",
    user : "Aakanksha",
    logger: "Admin",
    source: "console",
    severity: 5,
    properties : "-"
}
export const bugFileFunction = {
    typeErr(config,error, vm, info, ){
        this.common(config,error.toString(), vm, info)
    },
    warning(config,msg,vm,info){
        this.common(config,msg, vm, info)
    },
    network(config,error, reason){
        this.common( config,JSON.stringify(error), '', reason.toString())
    },
    common(config, error,url,info){
        fetch('https://logs.kartmax.in/api/logs', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-Authorization':  (config.key == "") ? defaultConfig.key: config.key,
        },
        body: JSON.stringify({
            "log":  error,
            "user": (config.user == "") ? defaultConfig.user: config.user,
            "logger":  (config.logger == "") ? defaultConfig.logger: config.logger,
            "source": (config.losourcegger == "") ? defaultConfig.source: config.source,
            "message": info,
            "severity":(config.severity == "") ? defaultConfig.severity: config.severity,
            "properties": (config.properties == "") ? defaultConfig.properties: config.properties,
        })
        }).then(res => res.json())
            .then(res => console.log(res));
    }

}
