import { h } from 'preact'; // eslint-disable-line no-unused-vars
import icon from '../../static/icon/apple-touch-icon.png';

export const Layout = (props) => (
  <div id="app">
    <img src={icon} class="app__logo" />
    <main id="content">
      {props.children}
    </main>
  </div>
)

export default Layout;
