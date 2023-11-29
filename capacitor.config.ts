import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'le-rappel',
  webDir: 'dist/le-rappel',
  server: {
    androidScheme: 'https'
  }
};

export default config;
