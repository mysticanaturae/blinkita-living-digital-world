/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

DAILY MATRIX™

Today's Living Time™

Version 1.0

==========================================
*/

import {

    calculateTzolkin

}

from "../tzolkin/TzolkinCalculator";



export function createDailyMatrix(){


    const today =

        new Date();



    const tzolkin =

        calculateTzolkin(

            today

        );



    return {

        date: today,

        kin: tzolkin.kin,

        tone: tzolkin.tone,

        sign: tzolkin.sign,

        signature: tzolkin.signature

    };


}