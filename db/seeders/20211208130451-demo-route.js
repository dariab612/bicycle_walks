module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Routes', [
      {
        name: 'Спортивный',
        description: 'Этот маршрут начинается от см.м.Спортивная и заканчивается на ст.м.Чернышевская',
        coordinates_1: 'Кирочная 19',
        coordinates_2: 'Восстания 6',
        userID: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Студенческий',
        description: 'Этот маршрут начинается от см.м.Чернышевская и заканчивается на ст.м.Парк победы',
        coordinates_1: 'Ленсовета 19',
        coordinates_2: 'Шпалерная 32',
        userID: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ночной',
        description: 'Этот маршрут начинается от см.м.Площадь восстания и заканчивается на ст.м.Петроградская',
        coordinates_1: 'Кирочная 19',
        coordinates_2: 'Восстания 6',
        userID: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Routes');
  },
};
