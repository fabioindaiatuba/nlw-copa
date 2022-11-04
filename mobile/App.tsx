import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts } from 'expo-font';

import RobotoBold from './assets/fonts/Roboto-Bold.ttf';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf';

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screen/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto_700Bold': RobotoBold,
    'Roboto_400Regular': RobotoRegular,
    'Roboto_500Medium': RobotoMedium,
  });
  console.log(fontsLoaded);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='light-content' backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <SignIn />
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
}

