
function ShippingDetails(){
    return(
        <>
            <div className="formContainer">
                <div className="fullname">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" />

                    <label htmlFor="lastname">Last name</label>
                    <input type="text" id="lastname" />
                </div>
                
                <label htmlFor="address1">Address 1</label>
                <input type="text" id="address1" />

                <label htmlFor="address2">Address 2</label>
                <input type="text" id="address2" />

                <div className="userDetails">
                    <div className="userLocation">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" />
                        
                        <label htmlFor="address2">Address 2</label>
                        <input type="text" id="address2" />
                    </div>
                </div>
                
                <label htmlFor="address2">Address 2</label>
                <input type="text" id="address2" />
                <label htmlFor="address2">Address 2</label>
                <input type="text" id="address2" />
            </div>
        </>
    );
}