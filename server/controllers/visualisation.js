const { fillErrorObject } = require("../middleware/error");
const logger = require("winston");
const fileSystem = require("fs");
const path = require("node:path");

let VISUALISATION_DIR =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_DIR
    : process.env.VISUALISATION_DIR;

const getVisualisationFile = (req, res, next) => {
  try {
    const { simulationId, visType } = req.params;
    let fileName = "";
    if (visType === "audio-socnet") {
      fileName = `audio_output_fig${simulationId}.png`;
    } else if (visType === "teamwork-barchart") {
      fileName = `teamwork.png`;
    }
    const directory = VISUALISATION_DIR + simulationId;
    const pathJoined = path.join(directory, path.sep, fileName);

    res.setHeader("content-type", "image/png");

    const readStream = fileSystem.createReadStream(pathJoined);

    readStream.pipe(res);
    readStream.on("error", (err) => {
      res
        .status(500)
        .send(
          fillErrorObject(500, "Unable to retrieve visualisation image", err)
        );
      readStream.emit("end"); //stop sending data
      return;
    });
  } catch (err) {
    return res
      .status(500)
      .send(
        fillErrorObject(500, "Unable to retrieve visualisation image", err)
      );
  }
};

const checkDataReadiness = async (req, res, next) => {
  try {
    const { simulationId } = req.params;
    const directory = VISUALISATION_DIR + simulationId;
    const pathJoined = path.join(directory, path.sep, "result");
    console.log(pathJoined);

    const hiveFileName = `${simulationId}_all.csv`;
    const positionFileName = `${simulationId}_network_data.csv`;
    const communicationFileName = `${simulationId}.csv`;
    const syncFileName = "sync.txt";

    if (fileSystem.existsSync(pathJoined)) {
      const fileNames = [
        hiveFileName,
        positionFileName,
        communicationFileName,
        syncFileName,
      ];

      let allFilesMissing = fileNames.every(
        (fileName) =>
          !fileSystem.existsSync(path.join(pathJoined, path.sep, fileName))
      );

      if (allFilesMissing) {
        res
          .status(500)
          .send(fillErrorObject(500, "All data is missing/not ready"));
        return;
      }

      res.status(200).send("At least one data is ready!");
    } else {
      res
        .status(500)
        .send(fillErrorObject(500, "Visualisation directory is missing"));
      return;
    }
  } catch (err) {
    logger.error(err);
    return res
      .status(500)
      .send(
        fillErrorObject(500, "Visualisation data is not ready (missing)", err)
      );
  }
};

module.exports = { getVisualisationFile, checkDataReadiness };
