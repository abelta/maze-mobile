import React from 'react'
import { Dimensions, View } from 'react-native'
import { GridItem } from './components'

const { width, height } = Dimensions.get('screen')
export const RATIO = height / width
export const ITEMS_PER_ROW = 10
export const ITEM_SIZE = width / ITEMS_PER_ROW
export const ROWS = Math.round((RATIO * height) / ITEM_SIZE)
export const TOTAL_ITEMS = ITEMS_PER_ROW * ROWS

export default () => (
  <View
    style={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <GridItem />
  </View>
)
