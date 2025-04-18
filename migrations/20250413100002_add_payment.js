/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("payments", (table) => {
    table.increments("id").notNullable().primary();
    table.integer('userId').unsigned().notNullable();
    table.foreign("userId").references("users.id").onDelete("NO ACTION");
    table.decimal("totalAmount").notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("payments");
};
