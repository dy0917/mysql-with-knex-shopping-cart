/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("products", (table) => {
    table.increments("id").notNullable().primary();
    table.string("title", 100).notNullable();
    table.string("description", 100).notNullable();
    table.string("imageUrl");
    table.decimal("price").notNullable();
    table.integer("amount");
    table.timestamps();
  });
  await knex("products").insert([
    {
      title: "Coke",
      description: "A coke",
      imageUrl:
        "https://toppng.com/uploads/preview/coke-free-desktop-115385941292ptblrvxaz.png",
      price: 2.5,
      amount: "10",
    },
    {
        title: "Bike",
        description: "a cike",
        imageUrl:
          "https://toppng.com/uploads/preview/aventon-kijote-adventure-bike-115497457205zuc2uwsne.png",
        price: 199,
        amount: "10",
      },
      {
        title: "Flower",
        description: "A flower",
        imageUrl:
          "https://toppng.com/uploads/preview/red-and-yellow-flower-11546672486bivk5eg8iu.png",
        price: 19,
        amount: "10",
      },
      {
        title: "T-shirt",
        description: "A T-shirt",
        imageUrl:
          "https://toppng.com/uploads/preview/birthday-girl-emoji-sunglasses-shirt-smile-t-shirt-11549416375cgnm51myzn.png",
        price: 19,
        amount: "100",
      },
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
