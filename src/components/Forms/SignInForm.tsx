import { useState } from 'react';
import { Eye, EyeClosed } from 'phosphor-react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
    Button as ButtonNativeBase,
    FormControl,
    HStack,
    Text,
    VStack,
    WarningOutlineIcon
} from 'native-base';

// components
import { Button } from '../Controllers/Button';
import { ButtonSocial } from '../Controllers/ButtonSocial';
import { InputForm } from '../Controllers/InputForm';

// schema
const schema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
})

interface FormData {
    email: string;
    password: string;
}

export function SignInForm() {

    const [showPassword, setShowPassword] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleSignIn(form: FormData) {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <VStack
                alignItems="center"
                w="full"
                mt={16}
                pb={10}
            >
                <FormControl
                    w="85%"
                    isInvalid={errors.email || errors.password ? true : false}
                >
                    <FormControl.Label color="gray.100">E-mail</FormControl.Label>
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

                    <FormControl.Label color="gray.100" mt={5}>Password</FormControl.Label>
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
                        title="Login"
                        onPress={handleSubmit(handleSignIn)}
                    />

                    <Text
                        textAlign="center"
                        fontFamily="mono"
                        fontSize={16}
                        my={3}
                        color="gray.400"
                    >
                        or login with
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