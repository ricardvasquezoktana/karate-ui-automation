function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  
  var config = {
    env: env,
    urlTest: 'https://www.google.com'
  }

  if (env == 'dev') {
    //config.urlTest = "https://www.facebook.com"
  } else if (env == 'prod') {
    config.urlTest = "https://www.facebook.com"
  }
  return config;
}