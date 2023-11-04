import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

type CardProps = {
  title?: string
  children: React.ReactNode
}


export function Card(props: CardProps) {

  const { title, children } = props

  return (
    <View className="border border-grey-light shadow p-2 rounded-lg">
      <H1>{title}</H1>
      {children}
    </View>
  )
}
