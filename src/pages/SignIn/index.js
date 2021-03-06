import React, { Component } from 'react';

import {
    View,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native';

// import { Container } from './styles';

import styles from './styles';

export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
    };

    handleSubmit = () => {
        const { email, password } = this.state;

        //SAGA(email, password)
    };

    render() {
        const { email, password } = this.state;

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={styles.container}>
                <View>
                    <Text style={styles.title}>Entrar</Text>
                    <Text style={styles.label}>E-MAIL</Text>
                    <TextInput
                        value={email}
                        onChangeText={text => this.setState({ email: text })}
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        autoFocus
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <Text style={styles.label}>SENHA</Text>
                    <TextInput
                        value={password}
                        onChangeText={text => this.setState({ password: text })}
                        style={styles.input}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="send"
                        ref={el => {
                            this.passwordInput = el;
                        }}
                        onSubmitEditing={this.handleSubmit}
                    />

                    <TouchableOpacity
                        onPress={this.handleSubmit}
                        style={styles.button}>
                        <Text style={styles.buttonText}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
