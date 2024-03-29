import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-react-native-web'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-console'),
    getAbsolutePath('storybook-addon-performance'),
    getAbsolutePath('@storybook/addon-postcss'),
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      esbuild: {
        logOverride: {
          'this-is-undefined-in-esm': 'silent',
        },
      },
      define: {
        'process.env': {},
      },
      resolve: {
        alias: [
          {
            find: 'react-native',
            replacement: 'react-native-web',
          },
        ],
      },
    }
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
