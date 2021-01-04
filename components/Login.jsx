import React from 'react'
import { useState } from 'react'
import { Button, TextInput, View, Text } from 'react-native'
import { useApi } from '@skolplattformen/react-native-embedded-api'
import Children from './Children'
import User from './User'

export default function () {
  const [pnr, setPnr] = useState('')
  const [token, setToken] = useState('')
  const [bankId, setBankId] = useState('')
  const [error, setError] = useState()

  const { login, logout, isLoggedIn } = useApi()

  const doLogin = async () => {
    try {
      setError()
      const status = await login(pnr)
      setToken(status.token)
      status.on('ERROR', (err) => setBankId('ERROR: ' + err.message))
      status.on('OK', () => setBankId('OK'))
      status.on('PENDING', () => setBankId('Waiting'))
      status.on('USER_SIGN', () => setBankId('Open'))
    } catch (err) {
      setError(err)
    }
  }
  return (
    <View>
      {!isLoggedIn &&
        <>
          <Text>Token: {token}</Text>
          <Text>BankID: {bankId}</Text>
          <TextInput
            style={{ borderColor: '#000', borderStyle: 'solid', borderWidth: 1, padding: 5 }}
            value={pnr} onChangeText={(text) => setPnr(text)} />
          <Button title="Login" onPress={() => doLogin()} />
        </>
      }
      {isLoggedIn && <Button title="Logout" onPress={() => logout()} />}
      {error && <Text numberOfLines={50}>
        {error.message}
        {error.stack}
      </Text>}
      { isLoggedIn &&
        <>
          <User />
          <Children />
        </>
      }
    </View>
  )
}
