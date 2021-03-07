
module.exports = {
    shortUrl : async (req, res) =>{
        try{
            let {url} = req.body;
            console.log(url);
            res.status(200).json({
                url
            })
        }catch(error){
            return res.status(500).json({
                error: "Conuld not genrate URL"
            })
        }
    }
}