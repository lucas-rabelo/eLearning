import { VStack, IButtonProps } from 'native-base';

interface Props extends IButtonProps {
    data: {
        key: string;
        title: string;
        text: string;
    }[]
}

export function Paginator({ data, ...rest }: Props) {
    return (
        <VStack>

        </VStack>
    );
}