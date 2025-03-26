import { axiosRequest, genLogUrl, genServerUrl, requestObj } from "@libs/api/Axios";

const Index = async (param = {}) => {

    const { PK = "", ..._data } = param;

    const action = `product/${PK}`;
    const url = genServerUrl(action);

    // Static Data
    const reqPayload = requestObj(_data);
    let respData = null;

    try {
        const resp = await axiosRequest.put(url, reqPayload);
        respData = resp.data;
    } catch (error) {
        throw error;
    }

    return respData;
};

export default Index;