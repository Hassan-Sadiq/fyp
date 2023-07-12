import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {vh, vw} from '../../../units';
import styles from './styles';

const DrawerScreenWrapper = props => {
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress.value, {
    inputRange: [0, 3],
    outputRange: [1, 0.4],
  });

  const translateX = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [0, -4 * vw],
  });

  const borderRadius = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [0, 1 * vw],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};
  const animatedOuterStyle = {transform: [{scale}]};

  return (
    <View
      style={[
        // animatedOuterStyle,
        styles.outerStyle,
        // {transform: [{translateX}]},
      ]}>
      <View style={StyleSheet.flatten([styles.stack])}>{props.children}</View>
    </View>
  );
};
export default DrawerScreenWrapper;

// import {useDrawerProgress} from '@react-navigation/drawer';
// import React from 'react';
// import Animated from 'react-native-reanimated';

// const DrawerScreenWrapper = props => {
//   const progress = useDrawerProgress();
//   const scale = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [1, 0.9],
//   });
//   const scaleInner = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [1, 0.8],
//   });
//   const borderRadius = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, 40],
//   });

//   const translateY = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, 2],
//   });
//   const translateX = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, 1.3],
//   });
//   const animatedStyle = {
//     transform: [{scale}, {translateY}],
//     borderRadius,
//   };
//   return (
//     <Animated.View
//       style={[
//         {
//           flex: 1,
//           overflow: 'hidden',
//         },
//         animatedStyle,
//       ]}>
//       <Animated.View
//         style={[
//           {
//             overflow: 'hidden',
//             width: '100%',
//             shadowColor: '#000',

//             shadowOffset: {
//               width: 0,
//               height: 4,
//             },
//             shadowOpacity: 0.3,
//             shadowRadius: 4.65,
//             elevation: 10,
//           },
//           {transform: [{scale: scaleInner, translateX}], borderRadius},
//         ]}>
//         <Animated.View
//           style={{
//             width: '100%',
//             height: '100%',
//             borderRadius,
//             overflow: 'hidden',
//           }}>
//           {props.children}
//         </Animated.View>
//       </Animated.View>
//     </Animated.View>
//   );
// };
// export default DrawerScreenWrapper;
