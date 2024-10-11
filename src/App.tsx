/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import TestScreen from './screens/TestScreen';
import AppOpenAdsProvider from './contexts/AppOpenAdsProvider';
import InternetCheckerProvider from './contexts/InternetCheckerProvider';
import {theme} from './resources/theme';
import NavigationProvider from './navigations/NavigationProvider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  //Change this value to true if you want to test smt
  const devTest = true;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <NavigationProvider>
            <GestureHandlerRootView style={{flex: 1}}>
              <BottomSheetModalProvider>
                <InternetCheckerProvider />
                <AppOpenAdsProvider />
                {devTest ? <TestScreen /> : <View></View>}
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </NavigationProvider>
        </PaperProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
