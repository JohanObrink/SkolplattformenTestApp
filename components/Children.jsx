import { useChildList } from '@skolplattformen/react-native-embedded-api'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import Calendar from './Calendar'
import Schedule from './Schedule'
import Classmates from './Classmates'
import Menu from './Menu'
import Part from './Part'
import News from './News'
import Notifications from './Notifications'

export default function Children() {
  const {
    reload,
    status,
    data,
    error,
  } = useChildList()

  const [selected, setSelected] = useState()

  return (
    <>
      <Part
        name="Children"
        status={status}
        error={error}
        reload={reload}>

        {data.map(child => (
          <TouchableOpacity key={child.id} onPress={() => setSelected(child)}>
            <Text>{child.name}</Text>
          </TouchableOpacity>
        ))}

      </Part>
      { selected &&
        <ScrollView>
          <Calendar child={selected} />
          <Classmates child={selected} />
          <Menu child={selected} />
          <News child={selected} />
          <Notifications child={selected} />
          <Schedule child={selected} />
        </ScrollView>
      }
    </>
  )
}
