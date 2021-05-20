import React, { useEffect } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'

export default ({ open, size }) => {
  const animDeg = new Animated.Value(open ? 45 : -45)

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animDeg, {
          toValue: open ? -45 : 45,
          useNativeDriver: true,
        }),
        Animated.delay(3000),
        Animated.timing(animDeg, {
          toValue: open ? 45 : -45,
          useNativeDriver: true,
        }),
        Animated.delay(3000),
      ])
    ).start()
  }, [])

  return (
    <Animated.View
      style={[
        styles.gridItem,
        { height: size, width: size },
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
      <View
        style={[styles.gridItemDiagonal, { height: Math.sqrt(2) * size }]}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  gridItemDiagonal: {
    width: 3,
    backgroundColor: '#333',
  },
})
