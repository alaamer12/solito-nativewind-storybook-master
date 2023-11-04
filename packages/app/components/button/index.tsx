import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

// import { MotiLink } from 'solito/moti'
import { MotiPressable as MotiLink } from 'moti/interactions'
import { TouchableOpacity } from 'react-native'

type CardProps = {
  title?: string
  children: React.ReactNode
}


export function Button(props: CardProps) {

  const { title, children } = props

  return (
    <View className="border border-grey-light shadow p-2 rounded-lg">
        {/* <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text selectable={false} className="text-base font-bold">
            Moti Link
          </Text>
        </MotiLink> */}
        <TouchableOpacity className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey-dark duration-300 ...">
          <Text>Save Changes</Text>
        </TouchableOpacity>
      {children}
    </View>
  )
}
