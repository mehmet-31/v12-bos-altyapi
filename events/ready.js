const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports = client => {
  client.user.setActivity(`${client.user.username}`);
  console.log(
    `[${moment().format("DD-MM-YYYY HH:mm:ss")}] BOT: ${
      client.user.username
    } Başarıyla Aktif Edildi!`
  );
};
