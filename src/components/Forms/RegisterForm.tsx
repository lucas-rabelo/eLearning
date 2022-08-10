import { useState } from 'react';
import { Eye, EyeClosed } from 'phosphor-react-native';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
    Button as ButtonNativeBase,
    FormControl,
    HStack,
    Text,
    VStack,
    WarningOutlineIcon,
} from 'native-base';

// components
import { Button } from '../Controllers/Button';
import { ButtonSocial } from '../Controllers/ButtonSocial';
import { InputForm } from '../Controllers/InputForm';
import { TypeUserSelected } from '../Lists/TypeUserSelected';

// schema
const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
})

interface FormData {
    name: string;
    email: string;
    password: string;
}

export function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState(null);

    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleRegister(form: FormData) {
        try {
            if (!type) {
                return Alert.alert("Warning", "Please, select one type for your access")
            }

            // Alert.alert("Success", "You are allowed to enter")
            navigation.navigate('Walkthrough');

        } catch (error) {
            console.log(error)
        }
    }

    function handleSelectedType(typeId: string) {
        typeId === type ? setType('') : setType(typeId);
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <VStack
                alignItems="center"
                w="full"
                pb={10}
            >
                <TypeUserSelected
                    typeSelected={type}
                    setType={handleSelectedType}
                />
                <FormControl
                    w="85%"
                    isInvalid={errors.name || errors.email || errors.password ? true : false}
                >
                    <FormControl.Label>Name</FormControl.Label>
                    <InputForm
                        control={control}
                        name="name"
                        placeholder='Enter your name'
                        placeholderTextColor="gray.200"
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                        {errors.name && errors.name.message}
                    </FormControl.ErrorMessage>

                    <FormControl.Label mt={5}>E-mail</FormControl.Label>
                    <InputForm
                        control={control}
                        name="email"
                        placeholder='Enter your email'
                        placeholderTextColor="gray.200"
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                        {errors.email && errors.email.message}
                    </FormControl.ErrorMessage>

                    <FormControl.Label mt={5}>Password</FormControl.Label>
                    <InputForm
                        control={control}
                        name="password"
                        placeholder='Enter your password'
                        placeholderTextColor="gray.200"
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={!showPassword}
                        InputRightElement={
                            <ButtonNativeBase
                                bg="transparent"
                                _pressed={{ backgroundColor: "transparent" }}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Eye size={24} color="#C3C3C3" /> : <EyeClosed size={24} color="#C3C3C3" />}
                            </ButtonNativeBase>
                        }
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                        {errors.password && errors.password.message}
                    </FormControl.ErrorMessage>

                    <Button
                        title="create account"
                        onPress={handleSubmit(handleRegister)}
                    />

                    <Text
                        textAlign="center"
                        fontFamily="mono"
                        fontSize={16}
                        my={3}
                    >
                        or sign up with
                    </Text>

                    <HStack
                        w="full"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <ButtonSocial
                            type='google'
                        />
                        <ButtonSocial
                            type='facebook'
                        />
                    </HStack>
                </FormControl>
            </VStack>
        </TouchableWithoutFeedback>
    );
}