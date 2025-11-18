import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

function mapStarships(results) {
  return results.map((ship, index) => ({
    key: index.toString(),
    value: ship.name,
  }));
}

export default function Spaceships() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((resp) => resp.json())
      .then((json) => {
        setData(mapStarships(json.results));
      })
      .catch((error) => {
        console.log("Error fetching starships:", error);
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