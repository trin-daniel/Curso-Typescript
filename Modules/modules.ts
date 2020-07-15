// Vai funcionar corretamente no console do editor, mas no browse não ira funcionar corretamente,
// Vai ser preciso instalar uma dependência.
import { course } from './course';

// CommonsJS import.
const commons = require('./commons-js');
console.log(commons.hello('Carla'));
console.log(course('Javascript'));