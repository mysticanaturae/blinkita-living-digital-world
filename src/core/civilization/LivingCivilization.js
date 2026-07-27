/*
==========================================

BLINKITA OS™

LIVING CIVILIZATION™

The foundation layer
of the Living Digital Civilization™

Version 1.0

Connected with:
- Living Systems™
- Living Principles™
- Civilization State™

==========================================
*/


import {

    LivingSystems

}

from "./LivingSystems";



import {

    LivingPrinciples

}

from "./LivingPrinciples";



import {

    CivilizationState

}

from "./CivilizationState";







export const LivingCivilization = {



    name:

        "Living Civilization™",




    version:

        "1.0",




    philosophy:


        LivingPrinciples,





    systems:


        LivingSystems,





    state:


        CivilizationState





};







export function getCivilization(){


    return LivingCivilization;


}