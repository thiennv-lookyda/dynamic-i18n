const path = require('path');

export function getI18nConfig(isServer) {
  return {
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
      localePath: path.resolve(
        !isServer
          ? './apps/dynamic-i18n/public/locales'
          : process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
          ? './public/locales'
          : './apps/dynamic-i18n/public/locales'
      ),
    },
    detection: {
      caches: ['cookie'],
      cookieSameSite: 'strict',
      lookupCookie: 'next-i18next',
      order: ['querystring', 'cookie', 'header'],
    },
  };
}
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
    localePath: path.resolve(
      process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
        ? './public/locales'
        : './apps/dynamic-i18n/public/locales'
    ),
  },
  detection: {
    caches: ['cookie'],
    cookieSameSite: 'strict',
    lookupCookie: 'next-i18next',
    order: ['querystring', 'cookie', 'header'],
  },
};
