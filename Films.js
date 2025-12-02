import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TextInput, Modal } from "react-native";
import styles from "./styles";

function mapFilms(results) {
  return results.map((film, index) => ({
    key: index.toString(),
    value: `Episode ${film.episode_id}: ${film.title}`,
  }));
}

export default function Films() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((resp) => resp.json())
      .then((json) => {
        setData(mapFilms(json.results));
      })
      .catch((error) => {
        console.log("Error fetching films:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Text style={styles.textInputLabel}>Film search:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type a search term"
          value={changedText}
          onChangeText={(text) => {
            setChangedText(text);
          }}
          onSubmitEditing={(e) => {
            const text = e.nativeEvent.text;
            setSubmittedText(text);
            setModalVisible(true);
          }}
          returnKeyType="search"
        />
      </View>

      <Modal
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalInner}>
            <Text style={styles.modalText}>You entered:</Text>
            <Text style={styles.modalText}>{submittedText}</Text>
            <Text
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              Close
            </Text>
          </View>
        </View>
      </Modal>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.value}</Text>}
        />
      )}
    </View>
  );
}
