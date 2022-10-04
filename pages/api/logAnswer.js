import next from "next";

function handler(req, res) {
      fetch("https://nfield-log-default-rtdb.firebaseio.com/answerLog.json"
    , {
        method: "POST",
        body: JSON.stringify(req.query.answer),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(Promise.resolve());


console.log("Hey I intercepted a request!" + req.query.answer);
  res
    .status(200)
    .json({ text: "I just added a record in the log for the given answer!" });

}

export default handler;
