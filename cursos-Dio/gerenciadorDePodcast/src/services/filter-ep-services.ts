import { FilterModel } from "../model/filter-model";
import { getPodcasts } from "../repositories/podcast-repositor";
import { StatusCode } from "../utils/http-status-code";


export const filterEpisodesService = async (canalName: string | undefined): Promise<FilterModel> => {

    let filterResponse: FilterModel = {
        statusCode:0,
        body: []
    };

    const queryString = canalName?.split("?p=")[1] || "";
    const data = await getPodcasts(queryString);

    filterResponse.statusCode = data.length != 0 ? StatusCode.OK : StatusCode.NO_CONTENT; 
    filterResponse.body = data;

    return filterResponse;
}