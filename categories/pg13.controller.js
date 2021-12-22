//Author: De Vogel Ryan
const {
    getAllPG13,
    getPG13ByID
} = require("./pg13.service");

module.exports = {
    getAllPG13: (req, res) => {
        getAllPG13((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "error"
                });
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                });
            }
            return res.json({
                success: 1,
                PG13: {
                    answers: results[0],
                    questions: results[1]
                }
            });
        });
    },
    getPG13ByID: (req, res) => {
        const id = req.params.id;
        getPG13ByID(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "error"
                });
            }
            if (!results[0].length > 0 || !results[1].length > 0) {//check if the response if not empty(or in other words the room with that id exists).
                //we SELECT 2 tables so that's why results[0] and results[1] is used. They each hold the response of a different table.                
                return res.json({
                    success: 0,
                    message: "No cards found with id: " + id
                });
            }
            return res.json({
                success: 1,
                PG13: {
                    answers: results[0],
                    questions: results[1]
                }
            });
        });
    },
}