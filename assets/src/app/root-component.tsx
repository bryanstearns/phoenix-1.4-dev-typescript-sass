import * as React from "react"
import { Provider } from "mobx-react"
import { RootStore } from "./root-store"
import { setupRootStore } from "./setup-root-store"

interface RootComponentState {
  rootStore?: RootStore
}

export class RootComponent extends React.Component<{}, RootComponentState> {
  async componentDidMount() {
    this.setState({
      rootStore: await setupRootStore(),
    })
  }

  render() {
    const rootStore = this.state && this.state.rootStore
    if (!rootStore) return null

    const otherStores = {
      // other stores we might want to inject
    }

    return (
      <Provider rootStore={rootStore} {...otherStores}>
        <h2>Hello, World!</h2>
      </Provider>
    )
  }
}
