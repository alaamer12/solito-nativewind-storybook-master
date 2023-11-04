export default ({ config }) => ({
  ...config,
  name: "Core Components",
  slug: "core-components",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});