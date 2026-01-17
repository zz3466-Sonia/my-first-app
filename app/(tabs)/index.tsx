import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailTrim = email.trim().toLowerCase();
  const looksLikeEmail = emailTrim.includes("@") && emailTrim.includes(".");
  const isEdu = emailTrim.endsWith(".edu");
  const canContinue = looksLikeEmail && isEdu && password.length >= 6;

  const onContinue = () => {
    Alert.alert("Demo", "Login UI works ✅");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 24 }}>
          {/* Header */}
          <Text style={{ fontSize: 30, fontWeight: "800", color: "#111" }}>
            CrossPath
          </Text>
          <Text style={{ marginTop: 8, fontSize: 14, color: "#666" }}>
            Dating for university students in New York.
          </Text>

          {/* Card */}
          <View
            style={{
              marginTop: 22,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 16,
              padding: 16,
              backgroundColor: "#F9FAFB",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#111" }}>
              Sign in
            </Text>
            <Text style={{ marginTop: 6, fontSize: 12, color: "#6B7280" }}>
              Use your .edu email to keep the community safe.
            </Text>

            {/* Email */}
            <Text style={{ marginTop: 14, marginBottom: 6, fontSize: 12, color: "#111", fontWeight: "600" }}>
              School email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="name@school.edu"
              placeholderTextColor="#9CA3AF"
              style={{
                height: 46,
                borderWidth: 1,
                borderColor: email.length === 0 ? "#D1D5DB" : (isEdu ? "#10B981" : "#EF4444"),
                borderRadius: 12,
                paddingHorizontal: 12,
                backgroundColor: "#FFFFFF",
                color: "#111",
              }}
            />

            {/* Password */}
            <Text style={{ marginTop: 12, marginBottom: 6, fontSize: 12, color: "#111", fontWeight: "600" }}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="at least 6 characters"
              placeholderTextColor="#9CA3AF"
              style={{
                height: 46,
                borderWidth: 1,
                borderColor: "#D1D5DB",
                borderRadius: 12,
                paddingHorizontal: 12,
                backgroundColor: "#FFFFFF",
                color: "#111",
              }}
            />

            {/* Helper text */}
            <Text style={{ marginTop: 8, fontSize: 12, color: isEdu || email.length === 0 ? "#6B7280" : "#EF4444" }}>
              {email.length === 0
                ? "Tip: only .edu emails are allowed."
                : isEdu
                ? "✅ .edu detected"
                : "❌ please use a .edu email"}
            </Text>

            {/* Button */}
            <Pressable
              onPress={onContinue}
              disabled={!canContinue}
              style={{
                marginTop: 14,
                height: 48,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: canContinue ? "#111827" : "#9CA3AF",
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: "700" }}>
                Continue
              </Text>
            </Pressable>

            {/* Footer links (UI only) */}
            <View style={{ marginTop: 12, flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>Forgot password?</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>Create account</Text>
            </View>
          </View>

          {/* Bottom note */}
          <Text style={{ marginTop: 14, fontSize: 11, color: "#9CA3AF" }}>
            Demo UI only. Next step: connect Supabase/Firebase.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
