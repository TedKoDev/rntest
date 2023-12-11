import React from 'react';
import {
  Animated,
  Div,
  DivProps,
  ScrollDiv,
  ScrollDivProps,
} from 'react-native-magnus';
import {Keyboard, KeyboardEvent} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import { useKeyboardAnimation } from "react-native-keyboard-controller"

interface IContainerProps extends DivProps {
  noSafeArea?: boolean;
  scrollable?: boolean;
  keyboardView?: boolean;
  scrollDivStyle?: ScrollDivProps;
  bottomSafeArea?: boolean;
  px?: string | number;
  py?: string | number;
}

const Container: React.FC<IContainerProps> = ({
  children,
  noSafeArea = false,
  scrollable = false,
  scrollDivStyle,
  bottomSafeArea,
  px = 0,
  py = 'lg',
  ...rest
}) => {
  // const { height, progress } = useKeyboardAnimation()
  // const scale = progress.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [1, 2],
  // })
  const {top, bottom} = useSafeAreaInsets();
  const contents = scrollable ? (
    <ScrollDiv
      flex={1}
      nestedScrollEnabled
      {...scrollDivStyle}
      removeClippedSubviews>
      {children}
      <Div p="3xl" bg="transparent" />
    </ScrollDiv>
  ) : (
    children
  );

  return (
    <Div
      bg="white"
      flex={1}
      px={px}
      {...(!noSafeArea && {
        pt: top,
      })}
      {...(bottomSafeArea && {
        pb: bottom,
      })}
      {...rest}>
      {contents}
    </Div>
  );
};

export default Container;
