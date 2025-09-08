# Express Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.

Middleware functions can perform the following tasks:
1. Execute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

## Why Middleware?
Middleware is appropriate (and convenient) whenever there is work to be done before a request reaches your controller code, or to abstract out logic and know it will always "just happen".  Once your middleware has been coded and tested, it becomes a silent unobtrusive worker just doing its job and staying out of your way.

## Common Uses
### Logging
Because you can cause the middleware to be triggered for every request, it is the perfect place to perform your logging (Winston, Morgan, etc).

### Error handling
Every application is slightly different in how it should handle errors.  You may want to implement an error handler middleware to catch any application errors at a central location.  **NOTE** : Error middlewares are distinguished by taking 4 parameters instead of the standard 3. `(err, req, res, next)`

### Authorization
Your application probably needs authentication and authorization, right?  If you have a custom internal auth provider you might need to implement a custom authorizer middleware.  However, if you're using an existing third party auth provider, a middleware probably already exists for it.  See [Passport](http://www.passportjs.org/) for examples.

### Request Manipulation
There may be times when you need to manipulate a request before it reaches your controller code.  If so, a middleware is just the place to do it.

## Defining Middleware
Regular (non-error) middleware have three parameters and the following definition :
```javascript
(req, res, next) => {
    // Do whatever we need to do, including working with request and response
    
    // Call next() to indicate the end of our middleware and trigger the next one
    next();
  };
```

Error handling middleware has a distinct four parameter definition to uniquely identify them and to provide the error to your code.  Even if you don't need to use `next()`, you need to include the parameter to maintain the definition.

```javascript
(err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('An error occurred');
};
```