import React from "react";
import dummy from './dummy_payload.json';

function Textfeild() {
    return <>
        <input type="text" id="fname" name="fname" placeholder={dummy[0].fieldLabel} />
    </>
}

export default Textfeild;
