/*
==========================================

BIRTH MATRIX™

Immutable Time Signature™

==========================================
*/

import {

    calculateTzolkin

}

from "../tzolkin/TzolkinCalculator";



export function createBirthMatrix(config){

    const tzolkin =

        calculateTzolkin(

            new Date(config.birthDate)

        );



    return {

        birthDate: config.birthDate,

        kin: tzolkin.kin,

        tone: tzolkin.tone,

        sign: tzolkin.sign,

        signature: tzolkin.signature

    };

}