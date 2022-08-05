import {
    VStack,
    Text,
    Image,
    HStack,
    Button
} from 'native-base';

import WomamWorkImg from '../../assets/images/work.png';

interface Props {
    title: string;
    text: string;
}

export function Slide({ title, text }: Props) {
    return (
        <VStack
            pt={10}
            px={5}
        >
            <Text
                w={'96'}
                mt={20}
                fontSize="4xl"
                fontFamily="heading"
                color="black"
            >
                {title}
            </Text>

            <Text
                w={'96'}
                mt={14}
                fontSize="md"
                fontFamily="mono"
                color="black"
            >
                {text}
            </Text>

            <Image
                w="full"
                h={400}
                resizeMode="contain"
                source={WomamWorkImg}
                alt="Mulher trabalhando"
                ml={-5}
                mt={3}
            />

            <HStack
                justifyContent="flex-end"
                mt={5}
            >
                <Button
                    py={5}
                    px={6}
                    mr={-5}
                    style={{
                        borderBottomLeftRadius: 40,
                        borderTopLeftRadius: 40,
                    }}
                    rounded="none"
                    bg="green.400"
                >
                    <Text
                        mr={5}
                        fontSize={20}
                        fontFamily="body"
                        color="white"
                    >Next</Text>
                </Button>
            </HStack>
        </VStack>
    );
}