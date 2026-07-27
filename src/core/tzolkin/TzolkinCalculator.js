/*
/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

TZOLKIN CALCULATOR™

Traditional Maya Tzolk'in System

NO DREAMSPELL

Version 1.1

Connected with:
- TzolkinState™
- World Resume™
- Living Time™

==========================================
*/


import {

    tzolkinSigns,
    tzolkinTones

}

from "./TzolkinData";






/*
==========================================
MAYA CALENDAR CORRELATION

Traditional GMT correlation

584283

==========================================
*/


const GMT_CORRELATION = 584283;








/*
==========================================
CALCULATE JULIAN DAY

==========================================
*/


function calculateJulianDay(date){



    const year =

        date.getUTCFullYear();



    const month =

        date.getUTCMonth() + 1;



    const day =

        date.getUTCDate();





    let a =

        Math.floor(

            (14 - month) / 12

        );





    let y =

        year + 4800 - a;





    let m =

        month + 12 * a - 3;





    return (


        day +


        Math.floor(

            (153 * m + 2) / 5

        ) +


        365 * y +


        Math.floor(

            y / 4

        ) -


        Math.floor(

            y / 100

        ) +


        Math.floor(

            y / 400

        ) -


        32045


    );


}









/*
==========================================
MAIN TZOLKIN CALCULATION

Traditional 260 Day Count

==========================================
*/


export function calculateTzolkin(date){



    /*
    -------------------------------
    Accept string or Date object
    -------------------------------
    */


    if(typeof date === "string"){


        date = new Date(date);


    }






    const julianDay =

        calculateJulianDay(date);






    const days =

        julianDay -

        GMT_CORRELATION;








    const kin =

        ((days % 260) + 260) % 260 + 1;









    const toneNumber =

        ((kin - 1) % 13) + 1;









    const signPosition =

        ((kin - 1) % 20);









    const tone =

        tzolkinTones.find(


            item =>


                item.number === toneNumber


        );









    const sign =

        tzolkinSigns[signPosition];









    return {


        kin,


        tone,


        sign,



        signature:


            `${tone.number} ${sign.name}`,



        calculatedAt:


            new Date().toISOString()


    };



}









/*
==========================================
TODAY TZOLKIN

==========================================
*/


export function getTodayTzolkin(){



    return calculateTzolkin(

        new Date()

    );


}