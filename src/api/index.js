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
import fetchIncidentGetAdmin from "./Incident/getAdmin";
import fetchIncidentGetUser from "./Incident/getUser";
import fetchIncidentActive from "./Incident/active";
import fetchIncidentPending from "./Incident/pending";
import fetchIncidentAdd from "./Incident/add";
import fetchIncidentUpdate from "./Incident/update";
import fetchIncidentDelete from "./Incident/delete";
import fetchIncidentUploadImg from "./Incident/uploadImg";
import fetchIncidentQuery from "./Incident/query";
import fetchIncidentUpdateStatus from "./Incident/updateStatus";

export {
    fetchIncidentGetAll,
    fetchIncidentGetAdmin,
    fetchIncidentGetUser,
    fetchIncidentActive,
    fetchIncidentPending,
    fetchIncidentAdd,
    fetchIncidentUpdate,
    fetchIncidentDelete,
    fetchIncidentUploadImg,
    fetchIncidentQuery,
    fetchIncidentUpdateStatus
}

import fetchIpSeriesGetAll from "./IpSeries/getAll";
import fetchIpSeriesGet from "./IpSeries/get";
import fetchIpSeriesGetIncident from "./IpSeries/getIncident";
import fetchIpSeriesAdd from "./IpSeries/add";
import fetchIpSeriesUpdate from "./IpSeries/update";
import fetchIpSeriesDelete from "./IpSeries/delete";
import fetchIpSeriesPending from "./IpSeries/pending";

export {
    fetchIpSeriesGetAll,
    fetchIpSeriesGet,
    fetchIpSeriesGetIncident,
    fetchIpSeriesAdd,
    fetchIpSeriesUpdate,
    fetchIpSeriesDelete,
    fetchIpSeriesPending
}

import fetchSignIn from "./User/signIn";
import fetchSignUp from "./User/signUp";
import fetchUserReport from "./User/report";
import fetchUserDashboard from "./User/dashboard";
import fetchUserProfilePhoto from "./User/uploadProfilePhoto";

import fetchUserGetAll from "./User/getAll";
import fetchUserGet from "./User/get";
import fetchUserAdd from "./User/add";
import fetchUserUpdate from "./User/update";
import fetchUserDelete from "./User/delete";

export {
    fetchSignIn,
    fetchSignUp,
    fetchUserReport,
    fetchUserDashboard,
    fetchUserProfilePhoto,
    fetchUserGetAll,
    fetchUserGet,
    fetchUserAdd,
    fetchUserUpdate,
    fetchUserDelete
}