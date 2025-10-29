import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import UserAuthentication from "@/components/UserAuthentication";

export default function UserView() {
  return (
    <ScreenWrapper>
      <UserAuthentication />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
