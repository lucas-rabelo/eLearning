import { Button as ButtonNativeBase, HStack, IButtonProps, Image, Text } from 'native-base';

// assets
import GooglePng from '../../assets/icons/google.png'
import FacebookPng from '../../assets/icons/facebook.png'

interface Props extends IButtonProps {
    type: 'google' | 'facebook';
}

export function ButtonSocial({ type, ...rest }: Props) {
    return (
        <ButtonNativeBase
            bg="gray.200"
            w="45%"
            py={'4'}
            alignItems="center"
            justifyContent="center"
            rounded="full"
            _pressed={{
                bg: "gray.200",
                opacity: 70
            }}
            {...rest}
        >
            <HStack space={2}>
                {type === 'facebook' ?
                    (
                        <Image
                            resizeMode="contain"
                            source={FacebookPng}
                            alt="Logo da Rede social"
                            w={7}
                            h={7}
                        />
                    ) :
                    (
                        <Image
                            resizeMode="contain"
                            source={GooglePng}
                            alt="Logo da Rede social"
                            w={7}
                            h={7}
                        />
                    )}
                <Text
                    color="black"
                    fontFamily="mono"
                    fontSize="md"
                >
                    {type === 'google' ? 'Google' : 'Facebook'}
                </Text>
            </HStack>
        </ButtonNativeBase>
    );
}