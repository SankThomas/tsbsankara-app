import { StyleSheet } from "react-native";

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 32,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  heading: {
    color: "#222",
    fontSize: 24,
    fontWeight: "bold",
  },
  imageTitle: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  cards: {
    gap: 32,
    marginBottom: 32,
  },
  text: {
    color: "#7e7e7e",
    fontSize: 16,
    lineHeight: 30,
  },
  buttonContainer: {
    marginVertical: 32,
    width: "50%",
  },
  button: {
    color: "#fff",
    backgroundColor: "#222",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 3,
    textAlign: "center",
  },
});
