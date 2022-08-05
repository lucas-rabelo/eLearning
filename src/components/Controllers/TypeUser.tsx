import {
    VStack,
    Button,
    Center,
    Text,
    IButtonProps,
    CheckIcon,
    useColorModeValue
} from 'native-base';

export const type_user = [
    { type: 'studant', isSelected: false },
    { type: 'tutor', isSelected: false }
]

type Props = IButtonProps & {
    type: string;
    isSelected?: boolean;
}

export function TypeUser({ type, isSelected = false, ...rest }: Props) {

    const bgLight = isSelected ? "blue.200" : "green.50";
    const bgDark = isSelected ? "black" : "dark.100";

    const textColorLight = isSelected ? "white" : "black";
    const textColorDark = "white";

    return (
        <Button
            bg={useColorModeValue(bgLight, bgDark)}
            variant="outline"
            p={0}
            w="47%"
            height={145}
            rounded="2xl"
            _pressed={{
                bg: useColorModeValue(bgLight, bgDark),
                opacity: 70
            }}
            {...rest}
        >
            <VStack
                ml={24}
                mr={-2}
                mb={6}
                w={5}
                h={5}
                bg="white"
                borderColor="black"
                rounded="full"
                p={5}
            >
                <Center>
                    {isSelected && <CheckIcon size={6} color="green.400" />}
                </Center>
            </VStack>
            <VStack
                w="full"
                p={0}
                mb={1}
                ml={-2}
            >
                <Text
                    fontSize={14}
                    color={useColorModeValue(textColorLight, textColorDark)}
                    fontFamily="mono"
                >
                    I am a
                </Text>
                <Text
                    fontSize={20}
                    color={useColorModeValue(textColorLight, textColorDark)}
                    fontFamily="heading"
                    textTransform="uppercase"
                >
                    {type}
                </Text>
            </VStack>
        </Button>
    );
}