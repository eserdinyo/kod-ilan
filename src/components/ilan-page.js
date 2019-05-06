import React, { Component } from "react";

import { IlanHeader } from "./ilan-header";
class IlanPage extends Component {
  render(props) {
    console.log(this.props.match.params.id);
    
    return <IlanHeader />;
  }
}

export default IlanPage;
