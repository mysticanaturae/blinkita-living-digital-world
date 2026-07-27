/*
==========================================

BLINKITA OS™

WORLD BUILDER DOMAIN CARD™

Creation path selector
of the World Builder™

Connected with:
- WorldBuilderState™
- WorldBuilderDomains™
- WorldBuilderActions™

Version 1.0

==========================================
*/


import {

    WorldBuilderDomains

}

from "../../core/worldbuilder/WorldBuilderDomains";



import {

    selectDomain

}

from "../../core/worldbuilder/WorldBuilderActions";







export default function WorldBuilderDomainCard(){





    function handleSelect(domain){


        selectDomain(domain);



    }







    return (



        <section className="living-card living-section">





            <h2>

                🌱 Choose Your Creation Path™

            </h2>





            <p>

                Every World Builder™ begins
                by choosing what kind of living creation
                wants to emerge.

            </p>








            <div className="living-grid">





                {


                    WorldBuilderDomains.map(


                        domain => (


                            <article

                                key={domain.id}

                                className="living-card"


                            >



                                <h3>

                                    {domain.icon}

                                    {" "}

                                    {domain.name}

                                </h3>





                                <p>

                                    {domain.description}

                                </p>





                                <button


                                    className="living-button"


                                    onClick={() => handleSelect(domain)}


                                >

                                    Choose


                                </button>





                            </article>



                        )


                    )


                }





            </div>







        </section>


    );



}