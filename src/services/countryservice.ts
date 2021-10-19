import axios from "../utils/http-axios";
import { user } from "../models/user";
import { userState, countryState, singleCountryState } from "@/states/states";

export class CountryServices {
  public async getAll(): Promise<any> {
    const response = await axios.get("all");
    countryState.countries = response.data;
    return response.data;
  }
  public async getSpecificCountry(slug:string): Promise<any> {
    const response = await axios.get("name/"+slug);
    singleCountryState.singleCountry = response.data[0];
    return response.data;
  }

  public async getByRegionalbloc(id: string): Promise<user[]> {    
    const response = await axios.get("all");
    return response.data;
  }

}
