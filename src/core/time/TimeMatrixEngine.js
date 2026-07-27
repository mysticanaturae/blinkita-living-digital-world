/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

TIME MATRIX ENGINE™

The Living Time Engine™

Version 1.0

Traditional Maya Tzolk'in

==========================================
*/

import { createBirthMatrix } from "./BirthMatrix";
import { createDailyMatrix } from "./DailyMatrix";
import { createResonanceMatrix } from "./ResonanceMatrix";
import { createCreationMatrix } from "./CreationMatrix";
import { createEvolutionMatrix } from "./EvolutionMatrix";
import { createLivingMatrix } from "./LivingMatrix";



export function createTimeMatrix(config){

    const birth =

        createBirthMatrix(config);



    const daily =

        createDailyMatrix(config);



    const resonance =

        createResonanceMatrix({

            birth,

            daily

        });



    const creation =

        createCreationMatrix({

            birth,

            resonance,

            config

        });



    const evolution =

        createEvolutionMatrix({

            creation,

            resonance,

            config

        });



    const living =

        createLivingMatrix({

            birth,

            daily,

            resonance,

            creation,

            evolution

        });



    return {

        birth,

        daily,

        resonance,

        creation,

        evolution,

        living

    };

}