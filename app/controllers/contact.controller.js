exports.create = (req, res) => {
    res.send({ massage: "create handler" });
};

exports.findALL = (req, res) => {
    res.send({ massage: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ massage: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({ massage: "update handler" });
};

exports.delete = (req, res) => {
    res.send({ massage: "delete handler" });
};

exports.deleteALL = (req, res) => {
    res.send({ massage: "deleteALL handler" });
};

exports.findALLFavorite = (req, res) => {
    res.send({ massage: "findAllFavorite handler" });
};