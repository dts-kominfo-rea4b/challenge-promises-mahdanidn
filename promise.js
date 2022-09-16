const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const penontonTheaterIXX = await promiseTheaterIXX();
    const penontonTheaterVGC = await promiseTheaterVGC();
    const groupPenonton = [...penontonTheaterIXX, ...penontonTheaterVGC];

    const totalEmosiPenonton = groupPenonton.filter(
      (penonton) => penonton.hasil == emosi
    );
    return totalEmosiPenonton.length;
  } catch (error) {
    console.log("terjadi kesalahan", error);
  }
};

module.exports = {
  promiseOutput,
};
