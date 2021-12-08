module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Routes', [
      {
        name: 'Спортивный',
        description: 'Этот маршрут начинается от см.м.Спортивная и заканчивается на ст.м.Чернышевская',
        coordinates: '123123123',
        userID: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Студенческий',
        description: 'Этот маршрут начинается от см.м.Чернышевская и заканчивается на ст.м.Парк победы',
        coordinates: '321321321',
        userID: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ночной',
        description: 'Этот маршрут начинается от см.м.Площадь восстания и заканчивается на ст.м.Петроградская',
        coordinates: '777777777',
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
