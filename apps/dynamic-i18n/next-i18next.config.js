const path = require('path');

module.exports = function getI18nConfig(isServerSide) {
  const localePath = !isServerSide
    ? './apps/dynamic-i18n/public/locales'
    : process.env.NEXT_PUBLIC_IS_LOCAL === 'true'
    ? './apps/dynamic-i18n/public/locales'
    : './public/locales';
  console.log(localePath, process.env.NEXT_PUBLIC_IS_LOCAL);
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
      localePath: path.resolve(localePath),
    },
    detection: {
      caches: ['cookie'],
      cookieSameSite: 'strict',
      lookupCookie: 'next-i18next',
      order: ['querystring', 'cookie', 'header'],
    },
  };
};
