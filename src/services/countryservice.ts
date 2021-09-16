import axios from "../utils/http-axios";
import { user } from "../models/user";
import { userState, countryState } from "@/states/userstate";

export class CountryServices {
  public async getAll(): Promise<any> {
    const response = await axios.get("all");
    countryState.countries = response.data;
    return response.data;
  }

  public async getByRegionalbloc(id: string): Promise<user[]> {
    const query = `user?partnerId=${id}`;
    const response = await axios.get(query);
    return response.data;
  }

}
