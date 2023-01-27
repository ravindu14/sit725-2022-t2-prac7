let DogModel = require("../model/dogModel");

const GetAllCards = async () => {
  try {
    const result = await DogModel.find({});
    return result;
  } catch (e) {
    console.log(e);
  }
};

const AddNewCard = async (newCard) => {
  try {
    const result = await DogModel.create({ ...newCard });
    return result;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { GetAllCards, AddNewCard };
