import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase
            bg="green.400"
            w="full"
            mt={10}
            py={'4'}
            rounded="full"
            {...rest}
            _pressed={{
                bg: "green.400",
                opacity: 70
            }}
        >
            <Text
                color="white"
                textTransform="uppercase"
                fontFamily="body"
                fontSize="md"
            >
                {title}
            </Text>
        </ButtonNativeBase>
    );
}