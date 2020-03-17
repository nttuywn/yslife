import { PermissionsAndroid, Alert } from 'react-native';

export async function checkPermission() {
    try {
        const granted = await PermissionsAndroid.requestMultiple(
            [PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
