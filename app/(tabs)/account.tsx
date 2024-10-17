import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, Switch, TextInput } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

const AccountScreen: React.FC = () => {
    const [notificationSetting, setNotificationSetting] = useState<boolean>(true);
    const [success, setSuccess] = useState<boolean>(false);
    const [changePwdPop, setChangePwdPop] = useState<boolean>(false);
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [changeMessagePop, setChangeMessagePop] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');


    const router = useRouter();

    const handleLogout = () => {
        router.push('/login');
    };

    const pwdSubmit = () => {
        setChangePwdPop(false);
        setSuccess(true);
    };

    const changeMessage = () => {
        setChangeMessagePop(false);
        setSuccess(true);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Top section with profile details */}
            <View style={styles.topContent}>
                <View style={styles.topBar}>
                    <Text style={styles.title}>我的賬戶</Text>
                    <View style={styles.notificationContainer}>
                        <Image style={styles.icon} source={require('../../assets/images/message.png')} />
                        <Image style={styles.icon} source={require('../../assets/images/cart.png')} />
                    </View>
                </View>

                {/* User Info */}
                <View style={styles.userMessage}>
                    <Image style={styles.avatar} source={require('../../assets/images/user/photo.png')} />
                    <View style={styles.userInfo}>
                        <Text style={styles.nickname}>陳小明</Text>
                        <Text style={styles.memberId}>會員編號: 00001</Text>
                    </View>
                </View>
            </View>

            {/* Settings */}
            <View style={styles.content}>
                <View style={styles.settingRow}>
                    <Switch value={notificationSetting} onValueChange={setNotificationSetting} />
                </View>

                <TouchableOpacity onPress={() => setChangePwdPop(true)} style={styles.settingRow}>
                    <Text style={styles.settingText}>
                        修改密碼
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setChangeMessagePop(true)} style={styles.settingRow}>
                    <Text style={styles.settingText}>
                        我的資料
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingRow}>
                    <Text style={styles.settingText}>
                        使用者條款
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingRow}>
                    <Text style={styles.settingText}>
                        私隱權政策
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogout} style={styles.settingRow}>
                    <Text style={[styles.settingText, { color: '#6D14B3' }]}>
                        <Image style={styles.settingIcon} source={require('../../assets/images/user/icon6.png')} /> 登出
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Change Password Modal */}
            {changePwdPop && (
                <View style={styles.modal}>
                    <Text>修改密碼</Text>
                    <TextInput placeholder="舊密碼" secureTextEntry value={oldPassword} onChangeText={setOldPassword} style={styles.input} />
                    <TextInput placeholder="新密碼" secureTextEntry value={newPassword} onChangeText={setNewPassword} style={styles.input} />
                    <TextInput
                        placeholder="確認新密碼"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={styles.input}
                    />
                    <Button title="確認修改" onPress={pwdSubmit} />
                </View>
            )}

            {/* Change Info Modal */}
            {changeMessagePop && (
                <View style={styles.modal}>
                    <Text>我的資料</Text>
                    <TextInput placeholder="登記電話" keyboardType="phone-pad" value={phone} onChangeText={setPhone} style={styles.input} />
                    <TextInput placeholder="姓(中)" value={lastName} onChangeText={setLastName} style={styles.input} />
                    <TextInput placeholder="名字(中)" value={firstName} onChangeText={setFirstName} style={styles.input} />
                    <TextInput placeholder="電子郵件" keyboardType="email-address" value={email} onChangeText={setEmail} style={styles.input} />
                    <Button title="確認修改" onPress={changeMessage} />
                </View>
            )}

            {/* Success Modal */}
            {success && (
                <View style={styles.modal}>
                    <Text>修改成功</Text>
                    <Button title="確定" onPress={() => setSuccess(false)} />
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    topContent: {
        backgroundColor: '#6D14B3',
        padding: 20,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#fff',
    },
    notificationContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 10,
    },
    userMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    userInfo: {
        marginLeft: 20,
    },
    nickname: {
        fontSize: 18,
        color: '#fff',
    },
    memberId: {
        color: '#ddd',
    },
    content: {
        marginTop: 20,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    settingText: {
        fontSize: 16,
    },
    settingIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    modal: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 20,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});

export default AccountScreen;
