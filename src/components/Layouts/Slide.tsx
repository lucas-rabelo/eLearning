import {
    VStack,
    Text,
    Image,
    HStack,
    Button
} from 'native-base';
import { Dimensions } from 'react-native';

import WomamWorkImg from '../../assets/images/work.png';

interface Props {
    title: string;
    text: string;
}

export function Slide({ title, text }: Props) {

    const { width } = Dimensions.get('window');

    return (
        <VStack
            w={width}
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
        </VStack>
    );
}