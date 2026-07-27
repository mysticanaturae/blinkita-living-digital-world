/*
==========================================

BLINKITA METHOD™

DISCOVERY RULES™

The laws of exploration
inside a Living World™

Version 1.0

==========================================
*/


import {

    DiscoveryTypes

}

from "./DiscoveryTypes";





export const DiscoveryRules = {





    [DiscoveryTypes.MYSTERY]: {


        effect: {


            discoveryIncrease:

                1,


            curiosity:

                1,


            evolutionMessage:

                "A mystery opens a new doorway of exploration."


        }


    },









    [DiscoveryTypes.EXPLORATION]: {


        effect: {


            discoveryIncrease:

                2,


            curiosity:

                2,


            evolutionMessage:

                "The world expands through conscious exploration."


        }


    },









    [DiscoveryTypes.SECRET]: {


        effect: {


            discoveryIncrease:

                3,


            knowledge:

                1,


            evolutionMessage:

                "A hidden secret becomes part of the living memory."


        }


    },









    [DiscoveryTypes.INSIGHT]: {


        effect: {


            discoveryIncrease:

                4,


            knowledge:

                1,


            evolutionMessage:

                "A new insight changes the perception of the world."


        }


    },









    [DiscoveryTypes.KNOWLEDGE]: {


        effect: {


            discoveryIncrease:

                5,


            knowledge:

                2,


            evolutionMessage:

                "Knowledge strengthens the intelligence of the world."


        }


    },









    [DiscoveryTypes.POSSIBILITY]: {


        effect: {


            discoveryIncrease:

                6,


            possibilities:

                1,


            evolutionMessage:

                "A new possibility appears inside the living field."


        }


    },









    [DiscoveryTypes.INVENTION]: {


        effect: {


            discoveryIncrease:

                8,


            creations:

                1,


            evolutionMessage:

                "A discovery becomes a creation."


        }


    },









    [DiscoveryTypes.BREAKTHROUGH]: {


        effect: {


            discoveryIncrease:

                10,


            evolutionMessage:

                "A breakthrough transforms the evolution path of the world."


        }


    },









    [DiscoveryTypes.REVELATION]: {


        effect: {


            discoveryIncrease:

                12,


            evolutionMessage:

                "A revelation reveals a deeper truth of the Living World."


        }


    }





};