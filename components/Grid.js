import React from 'react'
import { View } from 'react-native'
import { GridItem } from '.'

export default ({ items }) =>
  items.map(({ key, position }) => (
    <GridItem pose={position} key={key} style={StyleSheet.gridItem}>
      <View style={StyleSheet.gridItemDiagonal} />
    </GridItem>
  ))
