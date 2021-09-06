import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "68c160deafba49a9890bafa15fbe4ce3",
});

export const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("unable to work with API"));
};
