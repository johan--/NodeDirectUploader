NodeDirectUploader
===================

Application for Heroku article on [Direct S3 File uploads](https://devcenter.heroku.com/articles/s3-upload-node)

Licensing
----------

The files in this repository are, unless stated otherwise, released under the Apache License. You are free to redistribute this code with or without modification. The full license text is available [here](http://www.apache.org/licenses/LICENSE-2.0). 


Direct-to-S3 uploads in a Node.js application running on Heroku
-----------------------------------------------------------------------------

Simple example demonstrating how to accomplish a direct upload to Amazon's S3 in a Node.js web application.

This example uses the [express](http://expressjs.com/) web framework to facilitate request-handling. However, the process of signing the S3 PUT request would be identical in most Node apps.

This code is mostly ready to be run as cloned, but a function `update_account()` will need to be defined to handle the storing of the POSTed information. The current example simply demonstrates the upload to S3.


## Dependencies and Installation

Ensure Node is installed. This can be done through your package manager or from their [website](http://nodejs.org/).

Clone this repository:
```term
$ git clone git@github.com:flyingsparx/NodeDirectUploader.git
```

Change directory into the application and use `npm` to install the application's dependencies:
```term
$ cd NodeDirectUploader
$ npm install
```


## Running the application

* Set environment variables for your AWS access key and secret (see Heroku's  [Config Vars article](https://devcenter.heroku.com/articles/config-vars))
* Download and install the [Heroku toolbelt](https://toolbelt.heroku.com/)
* Run with ```$ foreman start```

```term
DEBUG=express:* node app.js
```

## Deploying the application 

See the article [Deploying with Git](https://devcenter.heroku.com/articles/git) for more detailed information on deploying to Heroku.

* Download and install the [Heroku toolbelt](https://toolbelt.heroku.com/)
* Commit your application to a local Git repository (e.g. `git init`, `git add .`, `git commit -m "version 1 commit"`, etc.)
* Create the application on Heroku by adding a Git remote (`$ heroku create`)
* Push your code to the new Heroku repo (`$ git push heroku master`)

## Setting environment variables
 
```term
$ export AWS_ACCESS_KEY=xxxx
$ export AWS_SECRET_KEY=xxxx
$ export S3_BUCKET=xxxx
$ export S3_REGION=xxxx
```

