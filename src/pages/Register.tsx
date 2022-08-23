import {
    Button,
    HStack,
    Text,
    VStack,
    useColorMode,
    useColorModeValue,
    ScrollView
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

// components
import { RegisterForm } from '../components/Forms/RegisterForm';

export function Register() {

    const navigation = useNavigation();
    const {
        toggleColorMode,
        colorMode
    } = useColorMode();

    function handleGoSignIn() {
        navigation.navigate('SignIn');
    }



    return (
        <ScrollView
            flex={1}
            bg={useColorModeValue("white", "dark.100")}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{
                pb: '16'
            }}
        >
            <VStack
                flex={1}
                bg={useColorModeValue("white", "dark.100")}
                alignItems="center"
                flexDirection="column"
                safeArea
            >
                <Text
                    fontSize="3xl"
                    fontFamily="heading"
                    textAlign="center"
                    mt={5}
                    mb={5}
                    color={useColorModeValue("black", "white")}
                >
                    Register
                </Text>

                <RegisterForm />

                <HStack
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text color="gray.400" fontFamily="mono" fontSize={16}>Already a User?</Text>

                    <Button
                        p={0}
                        bg="transparent"
                        ml={2}
                        _pressed={{
                            opacity: 70,
                            bg: "transparent"
                        }}
                        onPress={handleGoSignIn}
                    >
                        <Text color="green.400" fontFamily="heading" fontSize={16}>Login</Text>
                    </Button>
                </HStack>

            </VStack>
        </ScrollView>
    );
}