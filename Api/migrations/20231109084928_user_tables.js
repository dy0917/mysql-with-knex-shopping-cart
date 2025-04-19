/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').notNullable().primary();
    table.string('firstName', 100).notNullable();
    table.string('lastName', 100).notNullable();
    table.string('emailId', 100).notNullable().unique();
    table.string('password').notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
