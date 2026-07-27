/*
==========================================

BLINKITA OS™

WORLD BUILDER ACTIONS™

Actions that evolve
the Living Creator™

Version 1.0

Connected with:
- WorldBuilderState™
- WorldBuilderEvolution™
- Time Matrix™

==========================================
*/


import {

    getWorldBuilderState,

    updateWorldBuilderState

}

from "./WorldBuilderState";









/*
==========================================

ADD EXPERIENCE™

==========================================
*/


export function addExperience(amount){


    const state =

        getWorldBuilderState();



    updateWorldBuilderState({



        evolution:{


            ...state.evolution,


            experience:

                (state.evolution.experience || 0)

                +

                amount


        }



    });



}









/*
==========================================

ADD MILESTONE™

==========================================
*/


export function addMilestone(title){



    const state =

        getWorldBuilderState();





    const milestone = {


        title,


        created:

            new Date().toISOString()


    };





    updateWorldBuilderState({



        evolution:{


            ...state.evolution,


            milestones:[


                ...(state.evolution.milestones || []),


                milestone


            ]


        }



    });



}









/*
==========================================

REGISTER CREATION™

==========================================
*/


export function registerCreation(creation){



    const state =

        getWorldBuilderState();





    updateWorldBuilderState({



        creations:{


            ...state.creations,


            worlds:[


                ...(state.creations.worlds || []),


                creation


            ]


        }



    });



}

/*
==========================================

SELECT WORLD BUILDER DOMAIN™

Assign creation path

==========================================
*/


export function selectDomain(domain){



    const state =

        getWorldBuilderState();





    updateWorldBuilderState({



        domains:[


            ...(state.domains || []),


            domain


        ]



    });



}