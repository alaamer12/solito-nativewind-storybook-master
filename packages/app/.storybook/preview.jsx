import { View } from 'react-native';
import "../../dist/styles/tailwind.css"
import "@storybook/addon-console"
import { withPerformance } from 'storybook-addon-performance';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withPerformance,
    (Story) => {
      return (
        <> 
          {Story()}
        </>
      )
    }
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
