import fs from "fs";
import path from "path";
import {PodcastModel} from "../model/podcast-model";

const jsonPath = path.join(__dirname, "/podcast.json");

export const getPodcasts = async (canalName?: string): Promise<PodcastModel[]> => {
    const data = fs.readFileSync(jsonPath, "utf-8");
    let podcastList = JSON.parse(data);

    if (canalName) {
        podcastList = podcastList.filter((podcast: PodcastModel) => podcast.canalName === canalName);
    }
    return podcastList;
};