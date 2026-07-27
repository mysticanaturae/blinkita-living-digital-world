/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

RESONANCE MATRIX™

Birth × Daily

Version 1.0

==========================================
*/


export function createResonanceMatrix({

    birth,

    daily

}){


    /*
    ===============================
    Tone Resonance
    ===============================
    */


    let tone =

        birth.tone.number +

        daily.tone.number;



    while(tone > 13){

        tone -= 13;

    }



    /*
    ===============================
    Sign Resonance
    ===============================
    */


    let sign =

        birth.sign.position +

        daily.sign.position;



    while(sign > 20){

        sign -= 20;

    }



    return{

        tone,

        sign

    };

}