import React, { Component } from "react";
import ListItems from "./ListItems";

class List extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }
 render() {
   return (
    <div
    style={{
      padding: 2,
      height: 400,
      overflow: "scroll",
      overflowX: "hidden"
    }}
  >
    <ListItems todoes={this.props.todoes} />
  </div>
);
}
}
export default List;