import { instance } from "./instance";

export default async function verifySession() {
    const response = await instance.post("/users/me");
    return response.data;
}
