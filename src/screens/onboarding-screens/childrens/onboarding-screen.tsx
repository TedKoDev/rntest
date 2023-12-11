import React from 'react';
import { View, Text } from 'react-native';
import Container from '../../../components/common/container';
import { Image } from 'react-native-magnus';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnbordingScreen() {
  return (
    <Container>
      <Text></Text>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Text>Onboarding</Text>
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Text>Onboarding</Text>
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Text>Onboarding</Text>
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
