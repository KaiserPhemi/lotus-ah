

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Notifications', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },
    isRead: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false,

    },
    notificationTypeId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'notification_types',
        key: 'id',
        as: 'notificationTypeId'
      }
    },
  }),

  down: queryInterface => queryInterface.dropTable('Notifications')
};
