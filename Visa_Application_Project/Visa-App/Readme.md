# EduBao Visa App

## Setup
First make sure you are on an Linux OS.
* If this is not the case, you need to figure stuff out by yourself or go to [ubuntu.com/download](https://ubuntu.com/download).

### Dependencies / Requirements
* git
* node (latest LTS version recommended)
	* If you want to run multiple version of node, check out [nvm](https://github.com/nvm-sh/nvm).
* expo (install with `npm install -g expo-cli`)

### Cloning
Clone this Repository with `git clone git@git.curv.dev:EDUBAO/Visa-App.git`

## Testing
Test with `npm start`.

After a few seconds (may take some time on first run), your browser will show the Expo-Overview-Screen

From here you can test with your Andoid-Device, iOS Device or with Emulators.

### Android
1. Pair your Android device with adb.
2. Click on **Run on Android device/eumulator** and wait for the App to pop up.
	* Warning: First time will take 1-2 minutes as Expo first needs to be installed on your device.

#### Wireless pairing
If you don't want your phone connected via cable all the time, you can pair via tcp/ip.

1. Connect via Cable
2. run `adb tcpip 5555` (or any port you like)
3. run `adb connect 1.2.3.4:5555` to pair your phone. Replace with your local ip from your phone. See WiFi settings on your phone for your ip.

If you do not reboot your phone or your pc, you can start with step 3 to reconnect.


### iOS
Instructions to follow.
See: https://levelup.gitconnected.com/react-native-how-to-publish-an-expo-app-to-testflight-debug-common-errors-90e427b4b5ea
<!-- Can someone with an iOS device do this? -->

## Error Handling

### Accessing view manager configs directly off UIManager via ...
```Accessing view manager configs directly off UIManager via UIManager['getConstants'] is no longer supported. Use UIManager.getViewManagerConfig('getConstants') instead.```

This error is fixed, try to run `npm i`. If the Error stell presists, fix it by clearing expo cache with `expo r -c`