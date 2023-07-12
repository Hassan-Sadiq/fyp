import React, {useState} from 'react';
import {
  Alert,
  Modal,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import {icons} from '../../../assets/images/index';

const ModalView = props => {
  const [modalVisible, setModalVisible] = useState(props.isVisible);
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <BlurView
          style={styles.blurBackground}
          blurType="dark"
          blurAmount={8}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.modalContainer}>
          <View style={styles.modalSubContainer}>
            <View style={{flex: 1}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.progressSteps]} />
                <TouchableOpacity
                  style={styles.close}
                  onPress={props.setIsVisible}>
                  {props.close && (
                    <Image source={icons.cross} style={styles.closeText} />
                  )}
                </TouchableOpacity>
                {props.children}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
