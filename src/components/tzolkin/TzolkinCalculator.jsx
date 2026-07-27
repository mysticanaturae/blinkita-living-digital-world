/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

TZOLKIN CALCULATOR™

Traditional Maya Tzolk'in Time Signature™

Version 1.0

Connected with:
- TzolkinState™
- World Resume™
- Living Time™

==========================================
*/


import { useState } from "react";


import {

    saveTzolkinIdentity

}

from "../../core/tzolkin/TzolkinState";




import {

    calculateTzolkin

}

from "../../core/tzolkin/TzolkinCalculator";





export default function TzolkinCalculator(){



    const [birthDate,setBirthDate] = useState("");



    const [result,setResult] = useState(null);







    function handleCalculate(){



        if(!birthDate){

            return;

        }





        const signature = calculateTzolkin(

            birthDate

        );





        saveTzolkinIdentity(

            signature

        );





        setResult(

            signature

        );



    }







    return (



        <section className="living-page tzolkin-calculator">





            <header className="living-header">


                <h1>

                    🌀 Time Signature™

                </h1>



                <p>

                    Discover your traditional Maya Tzolk'in identity.

                </p>



            </header>







            <section className="living-card">



                <h2>

                    Calculate Your Time Code™

                </h2>





                <input


                    type="date"


                    value={birthDate}


                    onChange={e =>

                        setBirthDate(

                            e.target.value

                        )

                    }


                />







                <button


                    className="living-button"


                    onClick={handleCalculate}


                >


                    ✨ Calculate


                </button>





            </section>









            {

                result && (



                    <section className="living-card">



                        <h2>

                            KIN {result.kin}

                        </h2>





                        <p>

                            Tone:

                            {" "}

                            {result.tone}

                        </p>





                        <p>

                            Sign:

                            {" "}

                            {result.sign}

                        </p>





                        <p>

                            {result.signature}

                        </p>





                    </section>


                )

            }






        </section>



    );


}