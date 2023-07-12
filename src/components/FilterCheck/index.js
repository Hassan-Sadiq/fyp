import React from "react";
import {View, Text} from 'react-native'
import { Fonts } from "../../assets/fonts";
import { vh, vw } from "../../units";
import TextWrapper from "../TextWrapper";



const FilterCheck = () =>{

    renderCheck = () => {
        if (this.props.SubToggle === this.props.text) {
          return <Image style={{ resizeMode: 'contain', width: 6 * vw, height: 6 * vw, }} source={require('./checkActive.png')} />
        } else {
          return <Image style={{ resizeMode: 'contain', width: 6 * vw, height: 6 * vw, }} source={require('./uncheck.png')} />
    
        }
      }
    return(
        <View style={{   
            flexDirection: 'row',
        justifyContent: 'space-between',
        padding:1.5*vw,
        borderRadius:1*vw,
         }}>
            <TextWrapper style={{ 
        fontSize: 3*vw,
        color: '#999999',
        fontFamily: Fonts.SFR,
        paddingTop: 0.5*vh,
        paddingRight: 5*vw,
        textTransform: 'capitalize'
        }}></TextWrapper>
             <TouchableOpacity
          style={{ 
            position: 'absolute',
          right: 0,
          top: 1.5*vw,}}
          onPress={this.props.onPress}
          hitSlop={{ top: 10, right: 50, bottom: 10, left: 50 }}
        >
          {this.renderCheck()}
        </TouchableOpacity>
        </View>
    )
}
export default FilterCheck