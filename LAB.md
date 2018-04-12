HTTP Routes
Create an HTTP server that exposes a REST API for a resource

Choose a resource (pets, to dos, rock-bands, plants, whatever).

DB setup
Implement db scripts for your resource (single table okay!)

Models
Wrap your PSQL methods in a module called models/<resource>.js. Use this from your routes

Routes
Implement the following routes in routes/<resources>.js:

method	path
GET	/<resources>
GET	/<resources>/:id
POST	/<resources>
PUT	/<resources>/:id
DELETE	/<resources>/:id
(NOTE: plural resource name)

Export a single (req, res) => { /*...*/ } function.

That function delegates to a dictionary or Map by method.

Not Found (404)
Implement a module for returning not found expectations that exports a (req, res) => { /*...*/ } function.

It should return 404 plus any custom page you want to show.

App
1.Create a dictionary or Map with the plural resource name that contains the function from routes.
2.During request, check the path and match the resource to the dictionary.
If no match, use 404 handler
3.Testing
E2E test basic crud operations


Rubric
DB Setup and models: 2pts
Routes: 2pts
404 Handler: 1pt
App: 2pts
Tests: 2pts
Clean Project Organization: 1pt