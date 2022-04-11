const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: [
      'ko',
      'en',
      'zh',
      'ja',
      'de',
      'pt',
      'fr',
      'es',
      'it',
      'ru',
      'vn',
      'id',
    ],
    localePath:
      process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
        ? path.resolve('./public/locales')
        : path.resolve('./apps/dynamic-i18n/public/locales'),
  },
  detection: {
    caches: ['cookie'],
    cookieSameSite: 'strict',
    lookupCookie: 'next-i18next',
    order: ['querystring', 'cookie', 'header'],
  },
};
