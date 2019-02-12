export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.beforeEach((to, from, next) => {
    let nextValue = null;
    for (const [path, locale] of Object.entries(siteData.themeConfig.locales)) {
      if (to.path === path) {
        nextValue = locale.defaultURL;
      }
    }

    if (nextValue !== null) {
      next(nextValue);
    } else {
      next();
    }
  });
};
