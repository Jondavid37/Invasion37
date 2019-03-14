import React from "react";

const styles = {
  container: {
    overflow: "hidden",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },

  headerbox: {
    backgroundColor: "black",
    paddingTop: "0",
    paddingLeft: "0",
    flex: 1
  },

  box1: {
    overflowX: "hidden",
    backgroundColor: "",
    flex: 1,
    fontSize: "80px"
  },

  box2: {
    backgroundColor: "",
    flex: 1
  },

  box3: {
    backgroundColor: "red",
    flex: 1
  }
};

const Header = () => (
  <div>
    <div style={styles.container}>
      <div style={styles.headerbox} />

      <div style={styles.box1} />
      <div style={styles.box2}>
        <h1> </h1>
      </div>
      <div style={styles.box3} />
    </div>
  </div>
);

export default Header;
