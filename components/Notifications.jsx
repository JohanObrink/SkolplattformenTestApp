import { useNotifications } from '@skolplattformen/react-native-embedded-api'
import React from 'react'
import { Button, Text, View } from 'react-native'
import Part from './Part'
import { DateTime } from 'luxon'

export default function Notifications({ child }) {
  const {
    reload,
    status,
    data,
    error,
  } = useNotifications(child)
  return (
    <Part name="Notifications"
      status={status} error={error} reload={reload}>

      {data.slice(0, 2).map(item => (
        <>
          <Text>{item.message}</Text>
          <Text>
            {DateTime.fromISO(item.dateCreated).toISODate()}
          </Text>
        </>
      ))}
    </Part>
  )
}
