import { BASE_URL } from "../constant/baseUrl";

const getListOfAdvice = async () => {
    return fetch(BASE_URL + "advice")
        .then((res) => res.json())
        .then((data) => {
            return data.slip.advice;
        })
        .catch((e) => console.error(e));
};

export default getListOfAdvice;
