/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

TZOLKIN STATE™

Living Time Signature™

Traditional Maya Tzolk'in System

Version 1.1

Connected with:
- World State™
- World Resume™
- Time Signature™

==========================================
*/



let tzolkinState = {

    calculated:false,

    kin:null,

    tone:null,

    sign:null,

    signature:null,

    calculatedAt:null

};






/*
==========================================
SAVE

==========================================
*/


export function saveTzolkinIdentity(identity){


    tzolkinState = {

        calculated:true,

        kin:identity.kin,

        tone:identity.tone,

        sign:identity.sign,

        signature:identity.signature,

        calculatedAt:

            identity.calculatedAt ||

            new Date().toISOString()

    };


    return tzolkinState;


}






/*
==========================================
GET

==========================================
*/


export function getTzolkinIdentity(){


    return tzolkinState;


}






/*
==========================================
HAS IDENTITY

==========================================
*/


export function hasTzolkinIdentity(){


    return tzolkinState.calculated;


}






/*
==========================================
RESET

==========================================
*/


export function resetTzolkinIdentity(){


    tzolkinState = {

        calculated:false,

        kin:null,

        tone:null,

        sign:null,

        signature:null,

        calculatedAt:null

    };


}