import React, { useState } from 'react';
import { Input, Stack, Box, Text, Button, Badge } from 'native-base';
export const MyForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = () => {
        var emailValid = false;
        var passwordValid = false;
        //email
        if (email.length == 0) {
            setEmailError("Email is required");
        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError("")
            emailValid = true
        }
        //password

        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        // if (emailValid) {
        //     alert('Email: ' + email + '\nPassword: ' + password);
        // }
        if (emailValid && passwordValid) {
            alert('Email: ' + email + '\nPassword: ' + password);
            setEmail("");
            setPassword("");
        }
    }

    return (
        <Box>
            <Stack>
                <Stack paddingLeft={4} paddingRight={4}>
                    <Input
                        variant="underlined" placeholder="Enter Email"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                </Stack>
                {emailError.length > 0 &&
                    <Badge danger>
                        <Text>{emailError}</Text>
                    </Badge>}
                <Stack paddingLeft={4} paddingRight={4}>
                    <Input
                        variant="underlined" placeholder="Enter Password"
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                </Stack>
                {passwordError.length > 0 &&
                    <Badge danger>
                        <Text>{passwordError}</Text>
                    </Badge>}
                <Stack>
                    <Button
                        colorScheme="blue"
                        onPress={handleSubmit}
                    >
                        <Text>Submit</Text>
                    </Button>
                </Stack>
            </Stack>
            <Text>
                Email entered: {email}
            </Text>
            <Text>
                Password entered: {password}
            </Text>
        </Box>
    );
};
