class ServicesController{
    constructor(){}
    index(req, res){
        res.status(200).json({serverResponse: "hola mundo"});
    }
    test(req, res){
        req.body["msn"] = "por el servidor";
        const data = req.body;
        res.status(200).json(data);
    }
}
module.exports = ServicesController;