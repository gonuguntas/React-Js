
import React from "react";
import { FamilyProvider, FamilyConsumer } from "./familyContext";

export default class Grandmother extends React.Component {
  state = {
    lastName: "Nageswara rao"
  };

  render() {
    return (
      // We wrap all of the components that need access 
      // to the lastName property in FamilyProvider.
      <FamilyProvider value={this.state.lastName}>
        <Mother />
      </FamilyProvider>
    );
  }
}

const Mother = () => {
  return <Child />;
};

const Child = () => {
  // We wrap the component that actaully needs access to 
  // the lastName property in FamilyConsumer
  return <FamilyConsumer>{context => <p>{context}</p>}</FamilyConsumer>;
};