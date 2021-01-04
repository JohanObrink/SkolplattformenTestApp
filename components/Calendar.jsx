import { useCalendar } from '@skolplattformen/react-native-embedded-api'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { DateTime } from 'luxon'
import Part from './Part'

export default function Calendar({ child }) {
  const {
    reload,
    status,
    data,
    error,
  } = useCalendar(child)
  return (
    <Part name="Calendar"
      status={status} error={error} reload={reload}>

      {data
        .slice(0, 2)
        .map(i => ({
          ...i,
          from: DateTime.fromISO(i.startDate),
          to: DateTime.fromISO(i.endDate),
        }))
        .map(item => (
          <>
            <Text>{item.title}</Text>
            <Text>
              {item.from.toISODate()}
              -
              {item.to.toISODate()}
            </Text>
          </>
        ))
      }

    </Part>
  )
}
