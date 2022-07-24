import { BASE_URL } from "../constant/baseUrl";

const searchAdvice = async (param: string) => {
    return fetch(BASE_URL + "advice/search/" + param)
        .then((res) => res.json())
        .then((data) => {
            return data.slips;
        })
        .catch((e) => console.error(e));
};

export default searchAdvice;
