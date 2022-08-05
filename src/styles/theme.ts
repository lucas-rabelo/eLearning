import { extendTheme } from 'native-base';

export const THEME = extendTheme({
    colors: {
        green: {
            50: '#ECF3F0',
            400: '#40C7A7'
        },
        blue: {
            200: '#33354E'
        }
    },
    fonts: {
        heading: 'Roboto_900Black',
        body: 'Roboto_700Bold',
        mono: 'Roboto_400Regular',
    }
});