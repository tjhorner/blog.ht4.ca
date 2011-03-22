var env = process.env.NODE_ENV || 'production';

var configs = {
  'title': 'ht4',
  'description': 'thoughts of a web developer and a sysadmin',
  'env': env,
  'favicon': __dirname + '/public/favicon.ico',
  'staticDir': __dirname + '/public',
  'templatesDir': __dirname + '/templates',
  'articlesDir': __dirname + '/articles',
  'host': '127.0.0.1',
  'port': '8080',
  'baseUrl': (env == 'dev') ? 'http://127.0.0.1:8080' : 'http://blog.ht4.ca',
  'encoding': 'utf8',
  'perPage': 5,
  'googleAnalytics': (env == 'dev') ? 'UX-XXXXX-X' : 'UA-11235343-3',
  'disqus': (env == 'dev') ? 'tinybloglocaldev' : 'ht4'
};

exports = module.exports = configs;
