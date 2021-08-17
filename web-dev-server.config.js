/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {legacyPlugin} from '@web/dev-server-legacy';

export default {
  nodeResolve: true,
  preserveSymlinks: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    legacyPlugin({
      polyfills: {
        // Manually imported in index.html file
        appIndex: 'index.html',
        webcomponents: false,
      },
    }),
  ],
};
