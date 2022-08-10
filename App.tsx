import { NativeBaseProvider, StatusBar, Center, Text } from 'native-base';

import { useFonts, Roboto_700Bold, Roboto_900Black, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { THEME } from './src/styles/theme';

import { Loading } from './src/components/Controllers/Loading';
import { Walkthrough } from './src/pages/Walkthrough';
import { Routes } from './src/routes';

export default function App() {

    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_900Black,
        Roboto_400Regular
    })

    return (
        <NativeBaseProvider theme={THEME}>
            <StatusBar
                barStyle='light-content'
                backgroundColor="#000000"
                translucent
            />
            {fontsLoaded ? <Routes /> : <Loading />}
        </NativeBaseProvider>
    );
}