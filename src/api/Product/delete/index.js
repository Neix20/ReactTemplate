import { axiosRequest, genLogUrl, genServerUrl, requestObj } from "@libs/api/Axios";

const Index = async (param = {}) => {

    const { PK = "" } = param;

    const action = `product/${PK}`;
    const url = genServerUrl(action);

    // Static Data
    const reqPayload = requestObj({});
    let respData = null;

    try {
        const resp = await axiosRequest.delete(url, reqPayload);
        respData = resp.data;
    } catch (error) {
        throw error;
    }

    return respData;
};

export default Index;