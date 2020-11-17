import 'normalize.css';
import './css/styles.css';
import { inputListener, menuListener, searchListener } from './js/listeners';

let timeout;

menuListener();
searchListener();
inputListener(timeout);
