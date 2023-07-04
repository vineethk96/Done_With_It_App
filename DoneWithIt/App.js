import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image 
} from 'react-native';
import {
    useDimensions,                                              // Allows dynamic selection of screen size based on orientation
    useDeviceOrientation                                        // Returns device orientation
} from '@react-native-community/hooks';  
import { SafeAreaView } from 'react-native-safe-area-context';  // Provides a Platform Agnostic safe area to work within

export default function App() {

    let x = 1;

    // How logging works, remove these before production
    console.log("Here are print statements!");

    const handlePress = () => console.log("Text pressed");

    return (
        <SafeAreaView style = {[styles.container]}>
            <Text numberOfLines={1} onPress={handlePress}>
                hello
            </Text>
            <Image source={{
                width: 200,
                height: 300,
                uri: "https://picsum.photos/200/300"
            }} />
        </SafeAreaView>
);

}
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
},
});
