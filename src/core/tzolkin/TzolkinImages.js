/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

TZOLKIN IMAGES™

Visual layer of Living Time™

Traditional Maya Tzolk'in System

Version 2.0

Connected with:
- Tzolkin Calculator™
- Birth Matrix™
- Time Signature™
- Living UI System™

==========================================
*/


/*
==========================================
ASSET ROOT
==========================================
*/

const TZOLKIN_IMAGE_ROOT =
    "/Slike-Maya";


/*
==========================================
13 SACRED NUMBERS / TONES
==========================================
*/

export const tzolkinToneImages = {

    1:
        `${TZOLKIN_IMAGE_ROOT}/stevilo1.png`,

    2:
        `${TZOLKIN_IMAGE_ROOT}/stevilo2.png`,

    3:
        `${TZOLKIN_IMAGE_ROOT}/stevilo3.png`,

    4:
        `${TZOLKIN_IMAGE_ROOT}/stevilo4.png`,

    5:
        `${TZOLKIN_IMAGE_ROOT}/stevilo5.png`,

    6:
        `${TZOLKIN_IMAGE_ROOT}/stevilo6.png`,

    7:
        `${TZOLKIN_IMAGE_ROOT}/stevilo7.png`,

    8:
        `${TZOLKIN_IMAGE_ROOT}/stevilo8.png`,

    9:
        `${TZOLKIN_IMAGE_ROOT}/stevilo9.png`,

    10:
        `${TZOLKIN_IMAGE_ROOT}/stevilo10.png`,

    11:
        `${TZOLKIN_IMAGE_ROOT}/stevilo11.png`,

    12:
        `${TZOLKIN_IMAGE_ROOT}/stevilo12.png`,

    13:
        `${TZOLKIN_IMAGE_ROOT}/stevilo13.png`

};


/*
==========================================
20 DAY SIGNS

CreatorDashboard naming
        ↓
Actual visual asset

The mapping intentionally lives here
so the calculation layer does not need
to know anything about filenames.
==========================================
*/

export const tzolkinSignImages = {

    Imix:
        `${TZOLKIN_IMAGE_ROOT}/maya-imix-rdeca.png`,

    "Ik'":
        `${TZOLKIN_IMAGE_ROOT}/maya-ik-bela.png`,

    "Ak'b'al":
        `${TZOLKIN_IMAGE_ROOT}/maya-akbal-modra.png`,

    "K'an":
        `${TZOLKIN_IMAGE_ROOT}/maya-kan-rumena.png`,

    Chikchan:
        `${TZOLKIN_IMAGE_ROOT}/maya-chicchan-rdeca.png`,

    Kimi:
        `${TZOLKIN_IMAGE_ROOT}/maya-cimi-bela.png`,

    "Manik'":
        `${TZOLKIN_IMAGE_ROOT}/maya-manik-modra.png`,

    Lamat:
        `${TZOLKIN_IMAGE_ROOT}/maya-lamat-rumena.png`,

    Muluk:
        `${TZOLKIN_IMAGE_ROOT}/maya-muluc-rdeca.png`,

    Ok:
        `${TZOLKIN_IMAGE_ROOT}/maya-oc-bela.png`,

    Chuwen:
        `${TZOLKIN_IMAGE_ROOT}/maya-chuen-modra.png`,

    "Eb'":
        `${TZOLKIN_IMAGE_ROOT}/maya-eb-rumena.png`,

    "B'en":
        `${TZOLKIN_IMAGE_ROOT}/maya-ben-rdeca.png`,

    Ix:
        `${TZOLKIN_IMAGE_ROOT}/maya-ix-bela.png`,

    Men:
        `${TZOLKIN_IMAGE_ROOT}/maya-men-modra.png`,

    "K'ib'":
        `${TZOLKIN_IMAGE_ROOT}/maya-cib-rumena.png`,

    "Kab'an":
        `${TZOLKIN_IMAGE_ROOT}/maya-caban-rdeca.png`,

    "Etz'nab'":
        `${TZOLKIN_IMAGE_ROOT}/maya-etznab-belo.png`,

    Kawak:
        `${TZOLKIN_IMAGE_ROOT}/maya-cauac-modra.png`,

    Ajaw:
        `${TZOLKIN_IMAGE_ROOT}/maya-ahau-rumena.png`

};


/*
==========================================
GET IMAGE HELPERS
==========================================
*/

export function getToneImage(tone) {

    return tzolkinToneImages[tone];

}


export function getSignImage(sign) {

    return tzolkinSignImages[sign];

}


/*
==========================================
GET COMPLETE TZOLKIN VISUAL IDENTITY
==========================================
*/

export function getTzolkinImages(tone, sign) {

    return {

        tone:
            getToneImage(tone),

        sign:
            getSignImage(sign)

    };

}