import React from "react";
import { TouchableOpacity } from "react-native";

export default function NavigationButton({ text, disabled }) {
  return (
    <TouchableOpacity
      testID="nav-button"
      disabled={disabled}
      accessibilityState={{ disabled }}
    >
      {text}
    </TouchableOpacity>
  );
}
