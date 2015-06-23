var extend = require('deep-extend');

var CONFIGS = {
  app: {
    url: "http://nxtstepdsgn.com"
  },
  aws: {
    aws_access_key:   process.env.AWS_ACCESS_KEY,
    aws_secret_key:   process.env.AWS_SECRET_KEY,
    s3_bucket:        process.env.S3_BUCKET,
    s3_region:        process.env.S3_REGION
  }
};

// Patch in local overrides.
try {
  var LOCAL_CONFIGS = require("../local/config/development");
  extend(CONFIGS, LOCAL_CONFIGS);
}
catch(err) {}
// Ignore missing local config.

module.exports = CONFIGS;
