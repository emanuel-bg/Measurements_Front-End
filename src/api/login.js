import { instance } from "./instance";

export default async function login(user) {
    const response = await instance.post("/users/login", user);
    return response.data;
}
