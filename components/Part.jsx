import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import Collapsible from 'react-native-collapsible'

export default function Part({
  name, status, error, reload, children
}) {

  const [collapsed, setCollapsed] = useState(false)
  const height = 30

  return (
    <>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <Text style={{
          backgroundColor: "#333",
          color: "#fff",
          fontWeight: "900",
          height
        }}>
          {name} ({status})
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} collapsedHeight={0}>

        {error && <Text>Error: {error.message}</Text>}

        {children}

        <Button title="reload" onPress={() => reload()} />
      </Collapsible>
    </>
  )
}
