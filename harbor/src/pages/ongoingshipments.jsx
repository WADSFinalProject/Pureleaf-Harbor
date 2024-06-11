import "../styles/ongoingshipments.css";
import OngoingShipmentHeader from "../components/osh";
import OSdeliverycontainer from "../components/osdeliverycontainer";
import { useEffect, useState } from "react";

const ongoingshipments = () => {
    const data = [{data_id: 21021380132}, {data_id: 2999830913}, {data_id: 23123132131}, {data_id: 3453534534545}, {data_id: 34673261}, {data_id: 1231231312}]
    const [harborpageinfo, setharborpageinfo] = useState(0);
    const handlepageclick = (newpage) => {setharborpageinfo(newpage)};
    const currentharborinfo = data.slice(harborpageinfo);
    return(
    <div className="mainOngoingShipment">
        <OngoingShipmentHeader />
        {currentharborinfo.map((item,index) => (<OSdeliverycontainer key={item.data_id} ID_Data={item.data_id}/>))}
    </div>
    )
};

export default ongoingshipments 