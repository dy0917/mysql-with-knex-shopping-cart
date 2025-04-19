/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("paymentItems", (table) => {
    table.increments("id").notNullable().primary();
    table.integer('paymentId').unsigned().notNullable();
    table.foreign("paymentId").references("payments.id").onDelete("CASCADE");
    table.integer('productId').unsigned().notNullable();
    table.foreign("productId").references("products.id").onDelete("NO ACTION");
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("paymentItems");
};
