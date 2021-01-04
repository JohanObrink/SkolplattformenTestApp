import { useNews } from '@skolplattformen/react-native-embedded-api'
import React from 'react'
import { Button, Text, View } from 'react-native'
import Part from './Part'

export default function News({ child }) {
  const {
    reload,
    status,
    data,
    error,
  } = useNews(child)
  return (
    <Part name="News"
      status={status} error={error} reload={reload}>

      {data.slice(0, 2).map(item => (
        <>
          <Text>{item.header}</Text>
          <Text>{item.intro}</Text>
        </>
      ))}
    </Part>
  )
}
