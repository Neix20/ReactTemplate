import { axiosRequest, genLogUrl, genServerUrl, requestObj } from "@libs/api/Axios";

const Index = async (param = {}) => {

    const { PK = "", ..._data } = param;

    const action = `/scammer/${PK}/attr`;
    const url = genServerUrl(action);

    // Static Data
    const reqPayload = requestObj(_data);
    let respData = null;

    try {
        const resp = await axiosRequest.post(url, reqPayload);
        respData = resp.data;
    } catch (error) {
        throw error;
    }

    return respData;
};

export default Index;