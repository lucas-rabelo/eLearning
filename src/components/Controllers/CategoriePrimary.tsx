import { Button, IButtonProps, Image, Text, useColorModeValue } from 'native-base';

type Props = IButtonProps & {
    label: string;
    image: number;
    isSelected: boolean;
}

export function CategoriePrimary({ label, image, isSelected, ...rest }: Props) {

    const selectedLight = isSelected ? 'blue.200' : 'green.50';
    const selectedDark = isSelected ? 'black' : 'gray.900';

    const textSelected = isSelected ? 'white' : 'black';

    return (
        <Button
            flex={1}
            flexDirection="column"
            bg={useColorModeValue(selectedLight, selectedDark)}
            w={32}
            h={32}
            m={2}
            borderColor={useColorModeValue("gray.50", "none")}
            rounded="xl"
            alignItems="center"
            justifyContent="center"
            _pressed={{
                bg: "blue.200"
            }}
            {...rest}
        >
            <Image
                source={image}
                w="full"
                h={10}
                mb={2}
                resizeMode="contain"
                tintColor={isSelected ? 'white' : 'gray.500'}
                alt={label}
            />

            <Text
                textAlign="center"
                color={useColorModeValue(textSelected, 'white')}
            >{label}</Text>
        </Button>
    );
}