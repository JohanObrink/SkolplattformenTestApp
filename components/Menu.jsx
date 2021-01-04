import { useMenu } from '@skolplattformen/react-native-embedded-api'
import React from 'react'
import { Button, Text, View } from 'react-native'
import Part from './Part'

export default function Menu({ child }) {
  const {
    reload,
    status,
    data,
    error,
  } = useMenu(child)
  return (
    <Part name="Menu"
      status={status} error={error} reload={reload}>

      {data.slice(0, 2).map(item => (
        <>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </>
      ))}
    </Part>
  )
}
