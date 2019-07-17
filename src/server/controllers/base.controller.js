exports.indexPage = (req, res) => {
	res.render("index");
};

exports.ping = (req, res) => {
	res.send("Hello world!");
};
