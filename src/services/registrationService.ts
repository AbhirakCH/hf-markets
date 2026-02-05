import axios from "axios";

export interface RegistrationData {
  firstName: string;
  lastName: string;
  country: string;
  code: string;
  phone: string;
  email: string;
  experience: string;
  terms: boolean;
}

export const registerUser = async (data: RegistrationData) => {
  const response = await axios.post("https://httpbin.org/post", data);
  return response.data;
};
