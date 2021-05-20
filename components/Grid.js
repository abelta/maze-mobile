import React from 'react'
import { View, StyleSheet } from 'react-native'
import { GridItem } from '.'

export default ({ height, width }) => {
  const RATIO = height / width
  const ITEMS_PER_ROW = 8
  const ITEM_SIZE = width / ITEMS_PER_ROW
  const ROWS = Math.round((RATIO * height) / ITEM_SIZE)
  const TOTAL_ITEMS = ITEMS_PER_ROW * ROWS

  const items = [...Array(TOTAL_ITEMS).keys()].map(() => ({
    open: Math.random() < 0.5,
  }))
  return (
    <View style={[styles.grid, { height, width }]}>
      {items.map(({ open }, i) => (
        <GridItem key={i} open={open} size={ITEM_SIZE} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    backgroundColor: 'gold',
    flexWrap: 'wrap',
  },
})
