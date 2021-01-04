import { useSchedule } from '@skolplattformen/react-native-embedded-api'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { DateTime } from 'luxon'
import Part from './Part'

export default function Schedule({ child }) {
  const from = DateTime.local().plus({ week: 1 })
  const to = DateTime.local().plus({ week: 2 })
  const {
    reload,
    status,
    data,
    error,
  } = useSchedule(child, from, to)
  return (
    <Part name="Calendar"
      status={status} error={error} reload={reload}>

      {data.slice(0, 2).map(item => (
        <>
          <Text>{item.title}</Text>
          <Text>{item.startDate} - {item.endDate}</Text>
        </>
      ))}

    </Part>
  )
}
