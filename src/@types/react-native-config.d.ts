declare module 'react-native-config' {
    export interface NativeConfig {
        ENV?: string;
        ANDROID_NATIVE_ADV?: string;
        ANDROID_NATIVE_VIDEO_ADV?: string;
        IOS_NATIVE_ADV?: string;
        IOS_NATIVE_VIDEO_ADV?: string;
    }
    
    export const Config: NativeConfig
    export default Config
  }