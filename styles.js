import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textInputContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },

  textInputLabel: {
    fontSize: 16,
    marginBottom: 4,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  
  modalInner: {
    backgroundColor: "azure",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightsteelblue",
    borderRadius: 2,
    alignItems: "center",
  },

  modalText: {
    fontSize: 16,
    margin: 5,
    color: "slategrey",
  },

  modalButton: {
    fontWeight: "bold",
    margin: 5,
    color: "slategrey",
  },
});