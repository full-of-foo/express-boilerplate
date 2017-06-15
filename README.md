Express Boilerplate
==========

Just enough boilerplate to get you meaningfully going with Express 4+. The tooling set up is as follows:
 * Express 4+
 * Babel Es6 pipeline
 * Jasmine (for unit and functional testing)
 * Dockerised Xenial image (for running test and application containers)

## Usage

Clone the repo, `cd` into it and run:

```
find . -type f | xargs sed -i  's/express-boilerplate/YOUR-APP-NAME/g'
```

Build and run the application with:

```
docker build -t express-boilerplate . && docker run -it -p 8080:8080 express-boilerplate app
```

We can visit the API with:

```
$ curl http://localhost:8080/api
{"version":"0.0.1","env":"development"}
```

## Testing

```
docker build -t express-boilerplate . && docker run express-boilerplate app
```
