import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Container from '../../../components/common/container';
import { Image } from 'react-native-magnus';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');
export default function OnbordingScreen() {
  return (
    <Container>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require('../../../Assets/animations/boost.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require('../../../Assets/animations/boost4.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require('../../../Assets/animations/boost3.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require('../../../Assets/animations/boost5.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </Container>
  );
}

const styles = {
  lottie: {
    width: width * 0.8,
    height: height * 0.4,
    backgroundColor: '#fff',
  },
};
