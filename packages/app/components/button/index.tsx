import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import { Animated } from 'react-native'
import { useRef } from 'react'
import { TouchableOpacity } from 'react-native'

type CardProps = {
  title?: string
  children: React.ReactNode
}


export function Button(props: CardProps) {

  const anim = useRef(new Animated.Value(0)).current


  const { title, children } = props

  return (
    <View className="border border-grey-light shadow p-2 rounded-lg">
     
        <TouchableOpacity className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey-dark duration-300 ...">
          <Text>Save Changes</Text>
        </TouchableOpacity>
      {children}
    </View>
  )
}
