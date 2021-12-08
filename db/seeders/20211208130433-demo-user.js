module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Костя', email: 'costa@costa.ru', password: 'costa', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Миша', email: 'misha@misha.ru', password: 'misha', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Даша', email: 'dasha@dasha.ru', password: 'dasha', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users');
  },
};
