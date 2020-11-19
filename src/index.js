import 'normalize.css';
import './css/styles.css';
// eslint-disable-next-line import/named
import { inputListener, menuListener, searchListener } from './js/listeners';

let timeout;

menuListener();
searchListener();
inputListener(timeout);
