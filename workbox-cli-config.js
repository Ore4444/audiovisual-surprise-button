module.exports = {
  "globDirectory": "docs\\",
  "globPatterns": [
    "**/*.{css,html,js,mp3,webp}"
  ],
  "swDest": "docs/sw.js",
  "globIgnores": [
    "..\\workbox-cli-config.js",
  ],
  modifyUrlPrefix: {
    '/': ''
  }
};
