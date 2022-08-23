import { VStack, Text, Button as ButtonNativeBase, FlatList, useColorModeValue } from 'native-base';
import { ArrowLeft } from 'phosphor-react-native';
import { useState } from 'react';

// components
import { Button } from '../components/Controllers/Button';
import { CategoriePrimary } from '../components/Controllers/CategoriePrimary';

// utils
import { CategorieProps, categories } from '../utils/categories';

export function Categorie() {

    const [list, setList] = useState<CategorieProps[]>(categories);

    function handleSelectedCategorie(categorieKey: string) {
        const array = [...categories];

        array.find((item) => {
            if (item.key === categorieKey) {
                item.isSelected = !item.isSelected;
            }
        });

        setList(array);
    }

    return (
        <VStack
            flex={1}
            py={10}
            px={4}
        >
            <VStack
                mt={2}
                mb={2}
            >
                <ButtonNativeBase
                    w={12}
                    h={12}
                    bg="gray.300"
                    rounded={'full'}
                    _pressed={{
                        bg: 'gray.300'
                    }}
                >
                    <ArrowLeft
                        size={32}
                        color={useColorModeValue('black', 'white')}
                    />
                </ButtonNativeBase>
                <Text
                    mt={4}
                    mb={8}
                    fontSize={28}
                    fontFamily="heading"
                    color={useColorModeValue('black', 'white')}
                >Choose Categories</Text>
            </VStack>

            {/* CategoriesList */}

            <FlatList
                data={list}
                keyExtractor={item => String(item.key)}
                renderItem={({ item }) => (
                    <CategoriePrimary
                        image={item.image}
                        label={item.label}
                        isSelected={item.isSelected}
                        onPress={() => handleSelectedCategorie(item.key)}
                    />
                )}
                numColumns={3}
            />

            <Button
                title='continue'
            />
        </VStack>
    );
}