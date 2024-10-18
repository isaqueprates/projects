import {IncomingMessage, ServerResponse} from "http";
import {serviceEpisodes} from "../services/list-ep-services";
import {filterEpisodesService} from "../services/filter-ep-services";
import { contentType } from "../utils/content-type";
import { FilterModel } from "../model/filter-model";

export const controllerPodcastList = async(request: IncomingMessage, response: ServerResponse) => {

    const content: FilterModel = await serviceEpisodes();
    response.writeHead(content.statusCode, {"Content-Type": contentType.JSON});
    response.end(JSON.stringify(content.body));

}

export const controllerPodcastFilter = async(request: IncomingMessage, response: ServerResponse) => {

    const content: FilterModel = await filterEpisodesService(request.url);
    response.writeHead(content.statusCode, {"Content-Type": contentType.JSON});
    response.end(JSON.stringify(content.body));
}