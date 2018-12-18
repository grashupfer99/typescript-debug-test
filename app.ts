import { Person } from "./person";
import { people } from "./constants/names/people";

const alex = new Person('Alex');
const minho = new Person('민호');

alex.greeting();
minho.greeting();

console.log(people);

