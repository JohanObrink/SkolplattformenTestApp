import { useClassmates } from '@skolplattformen/react-native-embedded-api'
import React from 'react'
import { Button, Text, View } from 'react-native'
import Part from './Part'

export default function Classmates({ child }) {
  const {
    reload,
    status,
    data,
    error,
  } = useClassmates(child)
  return (
    <Part name="Classmates"
      status={status} error={error} reload={reload}>

      {data.slice(0, 2).map(item => (
        <>
          <Text>
            {item.firstname} {item.lastname}
          </Text>
          {item.guardians.map(guardian => (
            <>
              <Text>
                {guardian.firstname} {guardian.lastname}
              </Text>
              <Text>{guardian.mobile}</Text>
            </>
          ))}
        </>
      ))}

    </Part>
  )
}
