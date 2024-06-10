import { LoginUserProps, RegisterUserProps } from "@/types";
import axios from "axios";
import { cookies } from "next/headers";

const baseUrl = process.env.STRAPI_API_URL;

export async function registerUserService(userData: RegisterUserProps) {
  try {
    const response = await axios.post(
      baseUrl + "/auth/local/register",
      { ...userData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Registration Service Error:", error);
  }
}

export async function loginUserService(userData: LoginUserProps) {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/local`,
      JSON.stringify({ ...userData }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}

export async function getAuthToken() {
  const authToken = cookies().get("pff_jwt")?.value;
  return authToken;
}

export async function getUserMeLoader() {
  const baseUrl = process.env.STRAPI_API_URL;

  const url = new URL("/api/users/me?populate=*", baseUrl);

  const authToken = await getAuthToken();
  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const response = await axios.get(url.href, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = response.data;
    if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error: error };
  }
}
