/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

TZOLKIN IMAGES™

Visual layer of Living Time™

Traditional Maya Tzolk'in System

Version 1.0

Connected with:
- Tzolkin Calculator™
- Time Signature™
- Living UI System™

==========================================
*/



/*
==========================================
TONES

13 Sacred Numbers

==========================================
*/


export const tzolkinToneImages = {


    1:
        "/tzolkin/numbers/1.png",


    2:
        "/tzolkin/numbers/2.png",


    3:
        "/tzolkin/numbers/3.png",


    4:
        "/tzolkin/numbers/4.png",


    5:
        "/tzolkin/numbers/5.png",


    6:
        "/tzolkin/numbers/6.png",


    7:
        "/tzolkin/numbers/7.png",


    8:
        "/tzolkin/numbers/8.png",


    9:
        "/tzolkin/numbers/9.png",


    10:
        "/tzolkin/numbers/10.png",


    11:
        "/tzolkin/numbers/11.png",


    12:
        "/tzolkin/numbers/12.png",


    13:
        "/tzolkin/numbers/13.png"


};









/*
==========================================
20 DAY SIGNS

Traditional Maya Names

==========================================
*/


export const tzolkinSignImages = {


    Imix:
        "/tzolkin/signs/imix.png",


    Ik:
        "/tzolkin/signs/ik.png",


    Akbal:
        "/tzolkin/signs/akbal.png",


    Kan:
        "/tzolkin/signs/kan.png",


    Chicchan:
        "/tzolkin/signs/chicchan.png",


    Cimi:
        "/tzolkin/signs/cimi.png",


    Manik:
        "/tzolkin/signs/manik.png",


    Lamat:
        "/tzolkin/signs/lamat.png",


    Muluk:
        "/tzolkin/signs/muluk.png",


    Oc:
        "/tzolkin/signs/oc.png",


    Chuen:
        "/tzolkin/signs/chuen.png",


    Eb:
        "/tzolkin/signs/eb.png",


    Ben:
        "/tzolkin/signs/ben.png",


    Ix:
        "/tzolkin/signs/ix.png",


    Men:
        "/tzolkin/signs/men.png",


    Cib:
        "/tzolkin/signs/cib.png",


    Caban:
        "/tzolkin/signs/caban.png",


    Etznab:
        "/tzolkin/signs/etznab.png",


    Cauac:
        "/tzolkin/signs/cauac.png",


    Ahau:
        "/tzolkin/signs/ahau.png"


};









/*
==========================================
GET IMAGE HELPERS

==========================================
*/


export function getToneImage(tone){


    return tzolkinToneImages[

        tone

    ];

}




export function getSignImage(sign){


    return tzolkinSignImages[

        sign

    ];

}