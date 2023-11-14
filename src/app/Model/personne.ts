export class Personne {
  id;
  name;
  firstName;
  age;
  job: string;
  path;
  cin;
  constructor(
    id = 0,
    firstName = '',
    name = '',
    age = 0,
    job: any,
    path = '',
    cin = 1,
  ) {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.job = job;
    this.path = path;
    this.cin = cin;
  }
}
