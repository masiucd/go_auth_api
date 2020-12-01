import { Teacher } from './person-model.js';

export const state = {
  teachers: [],
};

export const loadTeachers = function () {
  state.teachers.push(
    new Teacher(
      '1958-02-13',
      'ulf.bilting@hotmail.com',
      'Ulf',
      'Bilting',
      '072-808876',
      ['Java', 'C++', 'C']
    ),
    new Teacher(
      '1964-02-20',
      'michael.gustavsson@gmail.com',
      'Michael',
      'Gustavsson',
      '072-111111',
      ['C++', 'JavaScript', 'TypeScript', 'Angular', 'React', 'MSSQL']
    ),
    new Teacher(
      '1977-01-10',
      'mikael.zetterstrom@hotmail.com',
      'Mikael',
      'Zetterström',
      '072-222222',
      ['C', 'C++']
    ),
    new Teacher(
      '1943-10-23',
      'ulf.malmstrom@hotmail.com',
      'Ulf',
      'Malmström',
      '072-33333',
      ['Visual Basic', 'Access', 'Excel']
    )
  );
};
