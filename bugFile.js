import Axios from "axios";


export const bugFileFunction = {
    typeErr(error, vm, info, ){
        this.common(error.toString(), vm, info)
    },
    warning(msg,vm,info){
        this.common(msg, vm, info)
    },
    network(error, reason){
        this.common( JSON.stringify(error), '', reason.toString())
    },
    common(error,url,info){
        fetch('https://logs.kartmax.in/api/logs', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-Authorization': 'QHixYrGS9EHSZqLJSXCwduKj1lC9Dv7NIl95GN9vPmXVm12vzj9KKUpHzQzIYA6j'
        },
        body: JSON.stringify({
            "log":  error,
            "user": "Aakanksha",
            "logger": "Admin",
            "source": "console",
            "message": info,
            "severity": 5,
            "properties": "-"
        })
        }).then(res => res.json())
            .then(res => console.log(res));
    }

}
