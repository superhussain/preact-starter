import { h, Component } from 'preact'; // eslint-disable-line no-unused-vars

export default class PersistGate extends Component {
  unsubscribe;

  state = {
    isBootstrapped: false,
  };

  handlePersistorState = () => {
    const { onBeforeLift, persistor } = this.props;
    const { bootstrapped } = persistor.getState();

    if (bootstrapped) {
      onBeforeLift && onBeforeLift();

      this.setState({ isBootstrapped: true });
      this.unsubscribe && this.unsubscribe();
    }
  };

  componentDidMount() {
    const { persistor } = this.props;
    this.unsubscribe = persistor.subscribe(this.handlePersistorState);
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  render({ children, loading = null, persistor }, { isBootstrapped }) {
    return isBootstrapped ? children[0] : loading;
  }
}
