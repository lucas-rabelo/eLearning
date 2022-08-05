import { Input as InputNativeBase, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
    return (
        <InputNativeBase
            type='text'
            variant="underlined"
            fontSize={14}
            mt={0.5}
            color="gray.600"
            placeholderTextColor="gray.600"
            _focus={{
                borderBottomWidth: 1,
                borderColor: "gray.600"
            }}
            {...rest}
        />
    );
}