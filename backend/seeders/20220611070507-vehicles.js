'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Vehicles', [
        {
          name: "Fusion",
          manufacturer: "Ford",
          release_year: 1997,
          description: "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Atirei o pau no gatis, per gatis num morreus.",
          sold: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Uno",
          manufacturer: "Fiat",
          release_year: 1997,
          description: "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Atirei o pau no gatis, per gatis num morreus.",
          sold: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Strada",
          manufacturer: "Fiat",
          release_year: 1996,
          description: "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Atirei o pau no gatis, per gatis num morreus.",
          sold: true,
          createdAt: new Date("01/01/2022"),
          updatedAt: new Date("01/01/2022")
        },
        {
          name: "Gol",
          manufacturer: "Volkswagen",
          release_year: 1979,
          description: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.In elementis mé pra quem é amistosis quis leo.Delegadis gente finis, bibendum egestas augue arcu ut est.",
          sold: true,
          createdAt: new Date("01/01/2022"),
          updatedAt: new Date("01/01/2022")
        },
        {
          name: "Ranger",
          manufacturer: "Ford",
          release_year: 1987,
          description: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.In elementis mé pra quem é amistosis quis leo.Delegadis gente finis, bibendum egestas augue arcu ut est.",
          sold: false,
          createdAt: new Date("01/01/2022"),
          updatedAt: new Date("01/01/2022")
        }
     ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
