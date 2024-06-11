import "../styles/harborhomeComp.css";

const SearchShipment = () => {
  return (
    <section className="Inner">
        {/* top part frame */}
      <div className="parentFrame">
         {/* profile pic, name, shipment track */}
        <div className="frameGroup"> 
           {/* name and profile picture */}
          <div className="profilepicParent">
             {/* profile picture */}
            <div className="frameChild" />
             {/* name and location wrapper */}
            <div className="frameWrapper">
                 {/* name and location */}
              <div className="fullnameParent">
                <h3 className="fullName">Full Name</h3>
                <div className="location">Location</div>
              </div>
            </div>
          </div>
           {/* shipment tracking search */}
          <div className="frameContainer">
            <div className="trackingShipmentParent">
              <div className="trackingShipment">
                Track your shipment
              </div>
              <input
                className="frameItem"
                placeholder="Resi number"
                type="text"
              />
            </div>
          </div>
        </div>
         {/* stuff to the side */}
          <div className="rectangleParent">
            <div className="frameInner" />
            <div className="rectangleDiv" />
        </div>
      </div>
    </section>
  );
};

export default SearchShipment;
