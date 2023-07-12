import React, {useState, useImperativeHandle, useRef} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import theme from '../../../utils/theme';
import {authIcons, icons} from '../../../assets/images';
import {vh, vw} from '../../../units';

const AuthTextInput = props => {
  const [focus, setFocus] = useState(false);
  const [showEye, setShowEye] = useState(true);
  const inputRef = useRef(null);

  useImperativeHandle(props?.reference, () => ({
    focus: focused,
    blur: blur,
  }));
  const focused = () => {
    inputRef.current.focus();
  };
  const blur = () => {
    inputRef.current.blur();
  };
  let src = props.type === 'password' ? authIcons.password : authIcons.email;
  props?.fullName && (src = icons.fullName);
  props?.subject && (src = icons.subject);

  console.log({src: props?.subject});

  return (
    <View
      style={[focus ? styles.customStyle : styles.textInputView, props.style]}>
      <View style={styles.emailIconView}>
        <Image
          source={
            props.type === 'password'
              ? authIcons.password
              : props.icon
              ? props.icon
              : 'none'
          }
          style={[
            styles.emailStyle,
            {
              tintColor: focus
                ? theme.activeTextInputColor
                : theme.defaultInactiveBorderColor,
            },
          ]}
        />
      </View>
      <TextInput
        ref={inputRef}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textInputStyle}
        placeholder={props.placeHolder}
        placeholderTextColor={theme.defaultInactiveBorderColor}
        secureTextEntry={props.type && showEye ? true : false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
        keyboardType={props.keyboardType}
      />
      {props.type === 'password' ? (
        <TouchableOpacity
          style={{width: '5%', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setShowEye(!showEye)}>
          <Image
            source={icons.eye}
            style={{
              height: vh * 4,
              width: vw * 4,
              marginRight: vw * 3,
              resizeMode: 'contain',
              tintColor: !showEye
                ? theme.black
                : theme.borderBottomDefaultColor,
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

// import React, {useState} from 'react';
// import {View, TextInput, Image, TouchableOpacity} from 'react-native';
// import styles from './styles';
// import theme from '../../../utils/theme';
// import {authIcons, contactIcons, icons} from '../../../assets/images';

// const AuthTextInput = props => {
//   const [focus, setFocus] = useState(false);
//   const [showEye, setShowEye] = useState(true);
//   let src = props.type === 'password' ? authIcons.password : authIcons.email;
//   props?.fullName && (src = contactIcons.name);
//   props?.subject && (src = contactIcons.subject);
//   return (
//     <View
//       style={[focus ? styles.customStyle : styles.textInputView, props.style]}>
//       <View style={styles.emailIconView}>
//         <Image
//           source={src}
//           style={[
//             styles.emailStyle,
//             {
//               tintColor: focus
//                 ? theme.activeTextInputColor
//                 : theme.defaultInactiveBorderColor,
//             },
//           ]}
//         />
//       </View>
//       <TextInput
//         value={props.value}
//         onChangeText={props.onChangeText}
//         style={styles.textInputStyle}
//         autoCapitalize={false}
//         placeholder={props.placeHolder}
//         placeholderTextColor={theme.defaultInactiveBorderColor}
//         secureTextEntry={props.type && showEye ? true : false}
//         onFocus={() => setFocus(true)}
//         // keyboardType='email-address'
//         keyboardType={props.keyboardType}
//       />
//       {props.type ? (
//         <TouchableOpacity
//           style={styles.eyeContainer}
//           onPress={() => setShowEye(!showEye)}>
//           <Image
//             source={icons.eye}
//             style={{
//               ...styles.eye,
//               tintColor: !showEye
//                 ? theme.black
//                 : theme.borderBottomDefaultColor,
//             }}
//           />
//         </TouchableOpacity>
//       ) : null}
//     </View>
//   );
// };

export default AuthTextInput;
