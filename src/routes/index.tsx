import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './auth.routes';

export function Routes() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}