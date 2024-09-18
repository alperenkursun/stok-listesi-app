import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  splashScreenContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashIcon:{
    width: 150,
    height: 150
  },
  mainIndexContainer:{
    flex: 1,
    backgroundColor: "white",
  },
  mainIndexStatusContainer:{
    width: "100%",
    height: 45,
    backgroundColor: "#7F27FF"
  },
  mainIndexTopContainer:{
    width: "100%",
    height: 45,
    backgroundColor: "#7F27FF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainIndexTopText:{
    fontSize: 16,
    fontWeight: "700",
    color: "white"
  },
  mainIndexContentContainer:{
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: "white"
  },
  mainIndexContentItemContainer:{
    width: "100%",
    minHeight: 10,
    backgroundColor: "#efe",
    marginBottom: 10,
    padding: 12,
    flexDirection: "row",
    width: "98%",
    marginHorizontal: "1%"
  },
  itemImage:{
    width: 60,
    height: 60,
    contentFit: "contain",
    borderRadius: 10,
    backgroundColor: "#eee"
  },
  mainIndexContentItemRightContainer:{
    flex: 1,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 5
  },
  mainIndexContentItemRightBox:{
   width: "32%"
  },
  mainIndexContentItemRightHeader:{
    fontWeight: "700"
  }
});

export default styles;
