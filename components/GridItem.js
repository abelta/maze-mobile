import React, { useEffect } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'

const { width, height } = Dimensions.get('screen')
export const RATIO = height / width
export const ITEMS_PER_ROW = 10
export const ITEM_SIZE = width / ITEMS_PER_ROW
export const ROWS = Math.round((RATIO * height) / ITEM_SIZE)
export const TOTAL_ITEMS = ITEMS_PER_ROW * ROWS

export default () => {
  const animDeg = new Animated.Value(45)

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animDeg, { toValue: -45 }),
        Animated.delay(3000),
        Animated.timing(animDeg, { toValue: 45 }),
        Animated.delay(3000),
      ])
    ).start()
  }, [])

  return (
    <Animated.View
      style={[
        styles.gridItem,
        {
          transform: [
            {
              rotate: animDeg.interpolate({
                inputRange: [-45, 0, 45],
                outputRange: ['-45deg', '0deg', '45deg'],
              }),
            },
            { perspective: 1000 },
          ],
        },
      ]}
    >
      <View style={styles.gridItemDiagonal} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  gridItemDiagonal: {
    width: 3,
    height: Math.sqrt(2) * ITEM_SIZE,
    backgroundColor: '#333',
  },
})
