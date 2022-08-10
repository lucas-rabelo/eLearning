import { Button, FlatList, Text, VStack } from 'native-base';
import { useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import { Slide } from '../components/Layouts/Slide';
import { Paginator } from '../components/Layouts/Paginator';
import { useNavigation } from '@react-navigation/native';

const slides = [
    {
        key: '1',
        title: "Explore Online Courses",
        text: "All types od education & professional courses available online.",
    },
    {
        key: '2',
        title: "Explore Online Courses",
        text: "All types od education & professional courses available online.",
    },
    {
        key: '3',
        title: "Explore Online Courses",
        text: "All types od education & professional courses available online.",
    }
]

export function Walkthrough() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const navigation = useNavigation();
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if(currentIndex < slides.length - 1) {
            slideRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.navigate('Categorie');
        }
    }

    return (
        <VStack
            flex={3}
        >
            <FlatList
                data={slides}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={item => item.key}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false
                })}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slideRef}
                renderItem={({ index, item }) => (
                    <Slide
                        key={index}
                        title={item.title}
                        text={item.text}
                    />
                )}
            />

                <Button
                    position="absolute"
                    bottom={16}
                    right={0}
                    w={'30%'}
                    py={5}
                    px={6}
                    style={{
                        borderBottomLeftRadius: 40,
                        borderTopLeftRadius: 40,
                    }}
                    rounded="none"
                    bg="green.400"
                    onPress={scrollTo}
                >
                    <Text
                        mr={5}
                        fontSize={20}
                        fontFamily="body"
                        color="white"
                    >Next</Text>
                </Button>
        </VStack>
    );
}