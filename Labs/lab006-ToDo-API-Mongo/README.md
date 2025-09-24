# Lab #6 - API Continued
Continuing from lab #5, add everything to make it a "real" API with MongoDB integration, linting, and JSON schema based input validation.

1. Create a database class as a global singleton to maintain a MongoDB connection pool.
2. Replace the memory mocks in the Model with a reference to the new database class.
3. Create a JSON schema that matches your expected data structure for "TODO" items.
4. Validate user requests to ensure the request body adheres to your JSON schema.
5. Return a list of validation errors and an appropriate HTTP status code when the user request does **not** match the JSON schema.
6. Do not allow user requests to add unsupported fields/properties.  Only allow properties specified in your JSON schema.  If the request body contains an unknown property, return a validation error and proper HTTP status code.
