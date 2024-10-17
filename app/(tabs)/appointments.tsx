import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'; // You need to install this package for the calendar functionality
import { useNavigation } from '@react-navigation/native';

const AppointmentsScreen: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('2024-10-17');
    const [checkProject, setCheckProject] = useState<any[]>([]);
    const navigation = useNavigation();

    const info = {
        date: '2024-10-17',
        selected: [
            {
                date: '2024-10-17',
                dateInfo: [
                    { project: '腸胃鏡檢查', datetime: '17/9/24 (10:00-11:00)' },
                    { project: '視力檢查', datetime: '17/9/24 (11:00-12:00)' },
                ],
            },
            {
                date: '2024-10-27',
                dateInfo: [{ project: '腸胃鏡複查', datetime: '27/9/24 (10:00-12:00)' }],
            },
        ],
    };

    useEffect(() => {
        const selectedData = info.selected.find((item) => item.date === selectedDate);
        if (selectedData) {
            setCheckProject(selectedData.dateInfo);
        } else {
            setCheckProject([]);
        }
    }, [selectedDate]);

    const onDateChange = (date: any) => {
        const formattedDate = date.format('YYYY-MM-DD');
        setSelectedDate(formattedDate);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topSection}>
                <View style={styles.topBar}>
                    <Text style={styles.title}>我的預約</Text>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../assets/images/message.png')} style={styles.icon} />
                        <Image source={require('../../assets/images/cart.png')} style={styles.icon} />
                    </View>
                </View>
            </View>

            {/* Calendar Section */}
            <View style={styles.calendarContent}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    selectedStartDate={selectedDate}
                    todayBackgroundColor="#6D14B3"
                    selectedDayColor="#6D14B3"
                    selectedDayTextColor="#FFFFFF"
                />
            </View>

            {/* Appointment List */}
            {checkProject.length > 0 ? (
                checkProject.map((item, index) => (
                    <View key={index} style={styles.appointmentItem}>
                        <Text style={styles.appointmentName}>{item.project}</Text>
                        <Text style={styles.appointmentTime}>{item.datetime}</Text>
                    </View>
                ))
            ) : (
                <Text style={styles.noAppointmentsText}>没有预约</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    topSection: {
        padding: 20,
        backgroundColor: '#6D14B3',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    calendarContent: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 20,
    },
    appointmentItem: {
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 20,
    },
    appointmentName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    appointmentTime: {
        fontSize: 16,
        position: 'relative',
        paddingLeft: 30,
    },
    noAppointmentsText: {
        fontSize: 18,
        color: '#aaa',
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default AppointmentsScreen;
