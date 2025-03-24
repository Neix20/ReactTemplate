import { axiosRequest, genLogUrl, genServerUrl, requestObj } from "@libs/api/Axios";

const Index = async (param = {}) => {

    const action = "/product/pending";
    const url = genServerUrl(action);

    // Static Data
    const reqPayload = requestObj({});
    let respData = null;

    try {
        const resp = await axiosRequest.get(url, reqPayload);
        respData = resp.data;
    } catch (error) {
        throw error;
    }

    return respData;
};

export default Index;