const FoodModule = require("../../models/foodmodel/FoodsModule");

exports.getFoods = async (req, res) => {
  try {
    const allFoods = await FoodModule.find();

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getActiveFoods = async (req, res) => {
  let st1 = 1;
  try {
    const allFoods = await FoodModule.find({ status: st1 });

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Getting foods by type

exports.getBreakfastFoods = async (req, res) => {
  let type = "Breakfast";
  let st1 = 1;
  try {
    const allFoods = await FoodModule.find({ status: st1, type: type });

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getDesserts = async (req, res) => {
  let type = "Desserts";
  let st1 = 1;
  try {
    const allFoods = await FoodModule.find({ status: st1, type: type });

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getDinnerFoods = async (req, res) => {
  let type = "Dinner";
  let st1 = 1;

  try {
    const allFoods = await FoodModule.find({ status: st1, type: type });

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getLunchFoods = async (req, res) => {
  let type = "Lunch";
  let st1 = 1;

  try {
    const allFoods = await FoodModule.find({ status: st1, type: type });

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAppetizers = async (req, res) => {
  let type = "Appetizer";
  let st1 = 1;

  try {
    const allFoods = await FoodModule.find({ status: st1, type: type });

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getBeveragers = async (req, res) => {
  let type = "Beverage";
  let st1 = 1;

  try {
    const allFoods = await FoodModule.find({ status: st1, type: type });

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.addFoods = (req, res) => {
  const {
    foodID,
    name,
    image,
    price,
    type,
    status,
    likeCount,
    description,
    insertUser,
    insertDate,
    updateDate,
  } = req.body;

  const newFood = new FoodModule({
    foodID,
    name,
    type,
    image,
    price,
    likeCount,
    description,
    insertUser,
    insertDate,
    updateDate,
    status,
  });

  newFood
    .save()
    .then(() => {
      res.json("Food Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: error.message });
    });
};

exports.updateFoods = async (req, res) => {
  let foodId = req.params.id;
  const {
    foodID,
    name,
    image,
    price,
    type,
    status,
    likeCount,
    description,
    insertUser,
    updateDate,
  } = req.body;

  const updateFood = {
    foodID,
    name,
    image,
    type,
    price,
    status,
    likeCount,
    description,
    insertUser,
    updateDate,
  };

  //Metana findBiId dmmoth vada kranava findOneAndUpdate dmmama vda na.
  const update = await FoodModule.findByIdAndUpdate(foodId, updateFood)
    .then(() => {
      res.status(200).send({ status: "Food updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating food", error: err.message });
    });
};

exports.deleteFoods = (req, res) => {
  let foodID = req.params.id;

  //metana danne column name eka  : value eka
  FoodModule.findOneAndRemove({ foodID: foodID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
      res.json({
        message: "Food Deleted",
      });
    }
  });
};

exports.getbyId = (req, res) => {
  let foodID = req.params.id;

  const food = FoodModule.findOne({ foodID: foodID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.send(post);
    }
  });
};
