import React, { Component } from "react";
import LogoTitle from "../components/LogoTitle";

import { ScrollView, Text } from "react-native";

export default class Details extends Component {
	public render() {
		return <ScrollView>
			<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
		</ScrollView>;
	}
}
