import fetchErrorLog from "./Log/error";
import fetchInfoLog from "./Log/info";

export {
    fetchInfoLog,
    fetchErrorLog
}

import fetchProductGetAll from "./Product/getAll";
import fetchProductGet from "./Product/get";
import fetchProductAdd from "./Product/add";
import fetchProductUpdate from "./Product/update";
import fetchProductDelete from "./Product/delete";

import fetchProductPending from "./Product/pending";
import fetchProductActive from "./Product/active";

export {
    fetchProductGetAll,
    fetchProductGet,
    fetchProductAdd,
    fetchProductUpdate,
    fetchProductDelete
}

export {
    fetchProductPending,
    fetchProductActive
}

import fetchProductCategory from "./ProductCategory/getAll";

export {
    fetchProductCategory
}

import fetchScammerGetAll from "./Scammer/getAll";
import fetchScammerGet from "./Scammer/get";
import fetchScammerAdd from "./Scammer/add";
import fetchScammerUpdate from "./Scammer/update";
import fetchScammerDelete from "./Scammer/delete";

export {
    fetchScammerGetAll,
    fetchScammerGet,
    fetchScammerAdd,
    fetchScammerUpdate,
    fetchScammerDelete,
}

import fetchScammerGetAllAttr from "./ScammerAttr/getAll";
import fetchScammerAttrQuery from "./ScammerAttr/query";
import fetchScammerAttrGet from "./ScammerAttr/get";
import fetchScammerAttrAdd from "./ScammerAttr/add";
import fetchScammerAttrUpdate from "./ScammerAttr/update";
import fetchScammerAttrDelete from "./ScammerAttr/delete";

export {
    fetchScammerGetAllAttr,
    fetchScammerAttrQuery,
    fetchScammerAttrGet,
    fetchScammerAttrUpdate,
    fetchScammerAttrDelete,
    fetchScammerAttrAdd
}

import fetchIncidentGetAll from "./Incident/getAll";
import fetchIncidentGet from "./Incident/get";
import fetchIncidentActive from "./Incident/active";
import fetchIncidentPending from "./Incident/pending";
import fetchIncidentAdd from "./Incident/add";
import fetchIncidentUpdate from "./Incident/update";
import fetchIncidentDelete from "./Incident/delete";
import fetchIncidentUploadImg from "./Incident/uploadImg";

export {
    fetchIncidentGetAll,
    fetchIncidentGet,
    fetchIncidentActive,
    fetchIncidentPending,
    fetchIncidentAdd,
    fetchIncidentUpdate,
    fetchIncidentDelete,
    fetchIncidentUploadImg
}

import fetchIpSeriesGetAll from "./IpSeries/getAll";
import fetchIpSeriesGet from "./IpSeries/get";
import fetchIpSeriesGetIncident from "./IpSeries/getIncident";
import fetchIpSeriesAdd from "./IpSeries/add";
import fetchIpSeriesUpdate from "./IpSeries/update";
import fetchIpSeriesDelete from "./IpSeries/delete";

export {
    fetchIpSeriesGetAll,
    fetchIpSeriesGet,
    fetchIpSeriesGetIncident,
    fetchIpSeriesAdd,
    fetchIpSeriesUpdate,
    fetchIpSeriesDelete
}