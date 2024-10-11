import {AppState} from 'react-native';
import {useEffect} from 'react';
import {AdEventType, AppOpenAd, TestIds} from 'react-native-google-mobile-ads';

let appOpenAd: AppOpenAd;
let isAppOpenAdLoaded = false;

const loadAppOpenAd = () => {
  appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN, {
    requestNonPersonalizedAdsOnly: true,
  });
  appOpenAd.load();
  appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
    isAppOpenAdLoaded = true;
  });
  appOpenAd.addAdEventListener(AdEventType.CLOSED, () => {
    loadAppOpenAd();
  });
};

const showAppOpenAd = () => {
  if (isAppOpenAdLoaded) {
    appOpenAd.show();
    isAppOpenAdLoaded = false; // Reset the flag after showing the ad
  }
};

const AppOpenAdsProvider = () => {
  useEffect(() => {
    loadAppOpenAd();
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        // Show the ad when the app is brought back to the foreground
        showAppOpenAd();
      }
    });
    return () => {
      // Clean up the subscription
      subscription.remove();
    };
  }, []);
  return null;
};

export default AppOpenAdsProvider;
