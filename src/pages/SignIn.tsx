import {
    Button,
    HStack,
    ScrollView,
    Image,
    Text,
    VStack,
    useColorMode,
    useColorModeValue
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

// assets
import backgroundLightImg from '../assets/images/bg.png';
import backgroundDarkImg from '../assets/images/bg_dark.png';

// components
import { SignInForm } from '../components/Forms/SignInForm';

export function SignIn() {

    const navigation = useNavigation();
    const {
        toggleColorMode,
        colorMode
    } = useColorMode();

    function handleGoRegister() {
        navigation.navigate("Register");
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
                {colorMode === 'light' &&
                    (
                        <Image
                            source={backgroundLightImg}
                            alt="Imagem de background"
                            resizeMode='contain'
                            w="full"
                            h={300}
                            position="absolute"
                            top={0}
                        />
                    )
                }
                {colorMode === 'dark' &&
                    (
                        <Image
                            source={backgroundDarkImg}
                            alt="Imagem de background"
                            resizeMode='contain'
                            w="full"
                            h={300}
                            position="absolute"
                            top={0}
                        />
                    )
                }
                <Text
                    fontSize="3xl"
                    fontFamily="heading"
                    textAlign="center"
                    mt={5}
                    mb={100}
                    color={useColorModeValue("black", "white")}
                >
                    Login
                </Text>

                <SignInForm />

                <HStack
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text color="gray.400" fontFamily="mono" fontSize={16}>New User?</Text>

                    <Button
                        p={0}
                        bg="transparent"
                        ml={2}
                        _pressed={{
                            opacity: 70,
                            bg: "transparent"
                        }}
                        onPress={handleGoRegister}
                    >
                        <Text color="green.400" fontFamily="heading" fontSize={16}>Sign Up Now</Text>
                    </Button>
                </HStack>

            </VStack>
        </ScrollView>
    );
}