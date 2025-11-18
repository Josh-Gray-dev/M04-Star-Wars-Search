import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

function mapPlanets(results) {
  return results.map((planet, index) => ({
    key: index.toString(),
    value: planet.name,      
  }));
}

export default function Planets() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((resp) => resp.json())
      .then((json) => {
        setData(mapPlanets(json.results));
      })
      .catch((error) => {
        console.log("Error fetching planets:", error);
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