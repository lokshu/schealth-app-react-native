import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// TabBarIcon component for rendering icons
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      {/* 主頁 (Home Tab) */}
      <Tabs.Screen
        name="index"
        options={{
          title: '主頁', // Tab title
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />, // Home icon
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      {/* 我的健康 (My Health Tab) */}
      <Tabs.Screen
        name="health"
        options={{
          title: '我的健康', // Tab title
          tabBarIcon: ({ color }) => <TabBarIcon name="heartbeat" color={color} />, // Health icon
        }}
      />
      {/* 我的預約 (My Appointments Tab) */}
      <Tabs.Screen
        name="appointments"
        options={{
          title: '我的預約', // Tab title
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />, // Appointment icon
        }}
      />
      {/* 我的帳號 (My Account Tab) */}
      <Tabs.Screen
        name="account"
        options={{
          title: '我的帳號', // Tab title
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />, // Account icon
        }}
      />
    </Tabs>
  );
}
