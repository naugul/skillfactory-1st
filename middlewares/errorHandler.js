const errorLogger = (error, req, res, next) => {
    console.error(error);
    next(error)
  }
  
  const errorParser = (error, req, res, next) => {
    if(error.status === 404) {
      res.status(404).send("Not found")
    } else {
      res.status(500).send("Server ERROR")
    }
  }
  
  const notFound = (req, res, next) => {
      const err = new Error("Not Found");
      err.status = 404;
      return next(err); 
    }
  
  const errorHandler = {
    errorLogger,
    errorParser,  
    notFound
  }
  
  module.exports = errorHandler;