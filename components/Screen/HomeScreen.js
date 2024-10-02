import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";
import { APP_ICONS } from "../../context/Settings";
import { AppContext } from "../../context/AppProvider";
import Models from "../Model/Model";
import CamView from "../Views/CamView";

const HomeScreen = () => {
  const {
    setCameraModelVisable,
    setGalleryModelVisable,
    cameraModelVisable,
    galleryModelVisable,
  } = React.useContext(AppContext);

  const COVERT_CAMERA_TO_PDF = () => {
    console.log("Converting image from camera to PDF");
    setCameraModelVisable(true);
  };

  const CONVERT_GALLERY_TO_PDF = () => {
    console.log("Converting image from gallery to PDF");
    setGalleryModelVisable(true);
  };

  return (
    <View style={styles.outline}>
      {cameraModelVisable && (
        <Models
          visible={cameraModelVisable}
          onClose={setCameraModelVisable}
          children={<CamView />}
          customHeight={"90%"}
        />
      )}

      {galleryModelVisable && (
        <Models
          visible={galleryModelVisable}
          onClose={setGalleryModelVisable}
        />
      )}

      <Nav title={"Image to PDF Converor"} />
      <Card
        icon={APP_ICONS.CAMERA}
        iconTwo={APP_ICONS.PDF}
        title={"Convert Image From Camera To PDF"}
        onPress={COVERT_CAMERA_TO_PDF}
      />
      <Card
        icon={APP_ICONS.GALLARY}
        iconTwo={APP_ICONS.PDF}
        title={"Convert Image From Gallery To PDF"}
        onPress={CONVERT_GALLERY_TO_PDF}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
