import { useUser } from '@skolplattformen/react-native-embedded-api'
import React from 'react'
import { Button, Text, View } from 'react-native'
import Part from './Part'
import { DateTime } from 'luxon'

export default function User() {
  const {
    reload,
    status,
    data,
    error,
  } = useUser()
  return (
    <Part name="User"
      status={status} error={error} reload={reload}>

      <Text>
        {data.firstName} {data.lastName}
        ({data.personalNumber})
      </Text>
      <Text>
        {data.email}
      </Text>

    </Part>
  )
}
