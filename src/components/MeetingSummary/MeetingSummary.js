import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const MeetingSummary = ({ changeShowMore }) => {
  return (
    <View style={styles.container}>
      {/* Banner Image */}
      <View style={styles.bannerContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        {/* <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText}>SHOES SALE</Text>
          <View style={styles.saleTag}>
            <Text style={styles.saleTagText}>50% OFF</Text>
          </View>
        </View> */}
      </View>

      {/* Meeting Card */}
      <View style={styles.meetingCard}>
        <View
          style={{
            backgroundColor: "#e0f0e0",
            paddingVertical: 5,
            paddingRight: 3,
            borderLeftWidth: 3,
            borderColor: "green",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Ionicons name="arrow-forward-circle" size={16} color="grey" />
          <Text style={styles.meetingTitle}>
            Meeting with Bryan on design Meeting with Bryan on design Meeting
            with Bryan on design
          </Text>
          <Ionicons name="help-circle-outline" size={16} color="red" />
          <Ionicons name="checkmark-circle-outline" size={16} color="green" />
          <Ionicons name="refresh-circle" size={16} color="grey" />
        </View>
        <Text style={styles.meetingTimer}>Event starts in 2hrs 10mins</Text>
        <Text style={styles.meetingDateTime}>
          Monday 12 April 2024, 6:30 - 7:30 PM
        </Text>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          {/* <TouchableOpacity style={styles.tag}> */}
          <Text style={{ fontWeight: "normal", marginRight: 10 }}>Linked</Text>
          {/* </TouchableOpacity> */}
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>Notes</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.meetingStatus}>
          Status: Changed on 13 March 2025, 3:30 PM
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#c0c0c0",
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          width: "auto",
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 5,
        }}
        onPress={() =>changeShowMore(true)}
      >
        <Ionicons
          name="chevron-down"
          size={13}
          color={"grey"}
          style={{ marginRight: 3 }}
        />
        <Text style={{ color: "grey", fontWeight: "light", fontSize: 12 }}>
          Show more
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  bannerContainer: {
    height: 120,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FF4C4C", // Fallback color if image doesn't load
  },
  bannerTextContainer: {
    position: "absolute",
    left: 20,
    bottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 10,
  },
  saleTag: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  saleTagText: {
    color: "#FF4C4C",
    fontWeight: "bold",
    fontSize: 12,
  },
  meetingCard: {
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  meetingTitle: {
    fontSize: 10,
    fontWeight: "500",
    marginBottom: 5,
    color: "#333",
    width: "80%",
  },
  meetingTimer: {
    fontSize: 14,
    color: "red",
    marginBottom: 5,
  },
  meetingDateTime: {
    fontSize: 14,
    color: "#000",
    marginBottom: 15,
  },
  tagsContainer: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#f0e0e0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  tagText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "500",
  },
  meetingStatus: {
    fontSize: 12,
    color: "#000",
  },
});

export default MeetingSummary;
