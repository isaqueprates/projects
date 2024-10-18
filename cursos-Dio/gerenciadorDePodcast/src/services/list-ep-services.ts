import { FilterModel } from "../model/filter-model";
import { getPodcasts } from "../repositories/podcast-repositor";
import { StatusCode } from "../utils/http-status-code";
export const serviceEpisodes = async (): Promise<FilterModel> => {

    let filterResponse: FilterModel = {
        statusCode:0,
        body: []
    };

    const data = await getPodcasts();

    filterResponse.statusCode = data.length != 0 ? StatusCode.OK : StatusCode.NO_CONTENT; 
    filterResponse.body = data;

    return filterResponse;
}