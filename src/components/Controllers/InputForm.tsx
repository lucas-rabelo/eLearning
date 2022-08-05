import { VStack, IInputProps } from 'native-base';
import { Control, Controller } from 'react-hook-form';

import { Input } from './Input';

type Props = IInputProps & {
    control: Control;
    name: string;
}

export function InputForm({ control, name, ...rest }: Props) {
    return (
        <VStack>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
        </VStack>
    );
}