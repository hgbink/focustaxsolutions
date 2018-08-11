const { chain, includes } = require('lodash');

const languages = ['en', 'cn'];
const catalogs = {
  en: { messages: require('./locale/en/messages.json') }, // eslint-disable-line global-require
  cn: { messages: require('./locale/cn/messages.json') }, // eslint-disable-line global-require
};

const defaultLanguage = 'en';

const langPrefix = lang => (lang === defaultLanguage ? '' : `/${lang}`);
const deprefix = pathname => (pathname.startsWith('/cn/') ? pathname.substr(4) : pathname);
const langFromPath = pathname => (pathname.startsWith('/cn/') ? 'cn' : 'en');

const browserLanguagePropertyKeys = ['languages', 'language', 'browserLanguage', 'userLanguage', 'systemLanguage'];
const availableLanguages = ['cn', 'en'];
const getLocale = () => chain(window.navigator)
  .pick(browserLanguagePropertyKeys)
  .values()
  .flatten()
  .compact()
  .map(s => s.substr(0, 2))
  .find(s => includes(availableLanguages, s))
  .value() || 'en';

exports.defaultLanguage = defaultLanguage;
exports.languages = languages;
exports.catalogs = catalogs;
exports.langPrefix = langPrefix;
exports.deprefix = deprefix;
exports.langFromPath = langFromPath;
exports.getLocale = getLocale;
