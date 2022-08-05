import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
    return (
        <Navigator
            initialRouteName="SignIn"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
                options={{
                    animation: "slide_from_left",
                    animationDuration: 200
                }}
            />
            <Screen
                name="Register"
                component={Register}
                options={{
                    animation: "slide_from_right",
                    animationDuration: 200
                }}
            />
        </Navigator>
    );
}