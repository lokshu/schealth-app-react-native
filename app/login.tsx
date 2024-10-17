import React, { useState } from 'react';
import { View, TextInput, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(true);
    const [isAgreed, setAgreed] = useState(false);
    const navigation = useNavigation(); // For navigation

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: '(tabs)' as never }],
        }); // Navigate to Home Screen after login
    };

    return (
        <View style={styles.topContent}>
            <View style={styles.contentBigBox}>
                <View>
                    <Image source={require('../assets/images/register/login-icon1.png')} style={styles.photos} />
                </View>

                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        placeholder="手機號碼"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                    />
                    <Image source={require('../assets/images/register/phone.png')} style={styles.ico1} />

                    <TextInput
                        style={styles.input}
                        placeholder="密码"
                        secureTextEntry={isPasswordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Image source={require('../assets/images/register/pass.png')} style={styles.ico2} />
                </View>

                <TouchableOpacity onPress={handleLogin} style={styles.getyzm}>
                    <Text style={styles.getyzmText}>登录</Text>
                </TouchableOpacity>

                <View style={styles.goRegister}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
                        <Text style={styles.goRegisterText}>立即註冊</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword' as never)}>
                        <Text style={styles.forget}>忘记密码</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.xieyiW}>
                    <TouchableOpacity onPress={() => setAgreed(!isAgreed)}>
                        <Text>{isAgreed ? '☑' : '☐'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.xieyi}>
                        點擊即表示您同意提供的 <Text style={styles.xieyiText}>使用者條款</Text> 和 <Text style={styles.xieyiText}>隱私政策</Text>。
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topContent: {
        width: '100%',
        minHeight: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    back: {
        width: 70,
        position: 'absolute',
        top: 32,
        left: 30,
    },
    contentBigBox: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
    },
    photos: {
        width: 220,
        height: 220,
        marginBottom: 32,
        borderRadius: 30,
        alignSelf: 'center',
    },
    inputs: {
        width: '80%',
        marginTop: 64,
    },
    input: {
        width: '80%',
        fontSize: 18, // Adjust font size
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#DBDBDB',
        marginBottom: 24,
        paddingLeft: 50,
    },
    ico1: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 12,
        left: 10,
    },
    ico2: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 70,
        left: 10,
    },
    getyzm: {
        width: '80%',
        height: 50,
        backgroundColor: '#6D14B3',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    getyzmText: {
        color: '#fff',
        fontSize: 16,
    },
    forget: {
        color: '#6D14B3',
        textAlign: 'center',
        marginBottom: 20,
    },
    goRegister: {
        width: '100%',
        paddingTop: 20,
    },
    goRegisterText: {
        color: '#6D14B3',
        textAlign: 'center',
    },
    xieyiW: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    xieyi: {
        fontSize: 14,
        color: '#9A9A9A',
        marginLeft: 10,
    },
    xieyiText: {
        color: '#6D14B3',
    },
});

export default LoginScreen;
