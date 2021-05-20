import React from 'react'
import { Dimensions, LogBox, View } from 'react-native'
import { Grid } from './components'

LogBox.ignoreAllLogs()

const { width, height } = Dimensions.get('screen')

export default () => <Grid height={height} width={width} />
