import { FlatList, VStack } from 'native-base';

import { Slide } from '../components/Layouts/Slide';

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
    return (
        <VStack
        >
            <FlatList
                data={slides}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.key}
                pagingEnabled
                scrollEventThrottle={16}
                renderItem={({ index, item }) => (
                    <Slide
                        key={index}
                        title={item.title}
                        text={item.text}
                    />
                )}
            />
        </VStack>
    );
}