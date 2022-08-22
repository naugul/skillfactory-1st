function logRequest(req, res, next) {
    req.date = new Date();
    console.log("Received " + req.method + " request for: "+ req.url + " on " + req.date)
    next();
}

let dates = {
    logRequest
}

module.exports = dates