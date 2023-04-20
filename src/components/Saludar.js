import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
export default function Saludar(props) {
//   const { firstname="no regista", lastname="no regista " } = props;
  const { firstname, lastname} = props;

  return <Text>Hola {firstname } {lastname}</Text>;
  
}
// Saludar.defaulProps={
//     firstname:"No registra", 
//     lastname:"No registra"
// }
Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  };
