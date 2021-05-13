const mongoose = require("mongoose");
const Score = require("../MODELS/score_mod");

    

exports.get_scores = () => {

    return new Promise((resolve, reject) => {

        Score.find()
            .select("_id org repo userId userName commitsCount issuesCount openPullsCount closePullsCount score")
            .exec()
            .then((result) => { 
                resolve({ status: 201, data: result }); 
            })
            .catch(() => {
                reject({ status: 500, error: "Server error" });
            });
    }); 
  };