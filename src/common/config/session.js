'use strict';

/**
 * session configs
 */
export default {
  name: 'thinkjs',
  type: 'redis',
  secret: '$K~3HUV%',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.getPath('common', 'runtime') + '/session',
    }
  }
};