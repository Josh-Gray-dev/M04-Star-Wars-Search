import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
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
