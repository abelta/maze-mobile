import React from 'react'
import { Dimensions, View } from 'react-native'
import { Grid } from './components'

const { width, height } = Dimensions.get('screen')

export default () => <Grid height={height} width={width} />
