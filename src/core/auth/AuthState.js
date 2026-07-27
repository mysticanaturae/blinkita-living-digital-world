/*
==========================================

BLINKITA METHOD™

BLINKITA OS™

AUTH STATE™

The identity layer
of a Living World™

Connected with:
- Creator Identity™
- World Builder™
- Living World™

Version 1.0

==========================================
*/


let authState = {


    authenticated: false,


    user: null,


    identity: null,


    role: "explorer"



};







export function getAuthState(){


    return authState;


}








export function createIdentity(identity){



    authState = {


        authenticated:true,


        user: identity.email || null,


        identity: identity,


        role:"creator"



    };



    return authState;


}








export function login(identity){



    authState = {


        authenticated:true,


        user: identity.email || null,


        identity: identity,


        role:"creator"



    };



    return authState;


}








export function logout(){



    authState = {


        authenticated:false,


        user:null,


        identity:null,


        role:"explorer"



    };



    return authState;


}