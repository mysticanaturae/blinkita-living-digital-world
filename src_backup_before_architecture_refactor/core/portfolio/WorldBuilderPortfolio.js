/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD BUILDER PORTFOLIO™

The expression layer
of a creator journey™

Version 1.0
==========================================
*/


export function createPortfolio(

    builder

) {


    return {


        builderId:

            builder.id,



        identity:

            builder.identity,



        worlds:

            builder.worlds || [],



        achievements:

            builder.achievements || [],



        skills:

            builder.skills || [],



        evolution:

            builder.evolution,



        legacy:

            builder.legacy || []



    };


}