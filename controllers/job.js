const axios = require("axios");

const Utils = require("../utils");

const getList = async (req, res) => {
  const { description, location, full_time, page } = req.body;

  const newReq = {
    description,
    location,
    full_time,
    page,
  };

  if (!newReq.description) delete newReq.description;
  if (!newReq.location) delete newReq.location;
  if (!newReq.full_time) delete newReq.full_time;
  if (!newReq.page) delete newReq.page;

  const QS = Utils.convertObjToQs(newReq);

  try {
    const { data } = await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?${QS}`
    );

    const jobs = data;

    res.status(201).json({
      code: 200,
      content: jobs,
    });
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

const getDetail = async (req, res) => {
  const id = req.params.id;

  console.log("fdsfs ", req.params.id);

  try {
    const { data } = await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
    );

    const jobs = data;

    res.status(201).json({
      code: 200,
      content: jobs,
    });
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

module.exports = {
  getList,
  getDetail,
};
