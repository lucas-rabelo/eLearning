import { HStack, IButtonProps } from 'native-base';

import { TypeUser, type_user } from '../Controllers/TypeUser';

interface Props extends IButtonProps {
    typeSelected: string;
    setType: (type: string) => void;
}

export function TypeUserSelected({ typeSelected, setType }: Props) {
    return (
        <HStack
            flex={1}
            w="full"
            px={6}
            mb={5}
            justifyContent="space-between"
        >
            {type_user.map((item) => (
                <TypeUser
                    key={item.type}
                    type={item.type}
                    isSelected={item.type === typeSelected}
                    onPress={() => setType(item.type)}
                />
            ))}
        </HStack>
    );
}