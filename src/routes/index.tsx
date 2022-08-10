import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './auth.routes';
import StackRoutes from './stack.routes';

export function Routes() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}