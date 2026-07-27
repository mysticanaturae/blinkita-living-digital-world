/*
==========================================

BLINKITA METHOD™

BLINKITA OS™

AUTH PORTAL™

The entrance identity portal
of a Living World™

Version 1.2

Connected with:
- Identity Layer™
- Creator Identity™
- World Builder™
- Living World™


==========================================
*/


import {

    useState

}

from "react";



import {

    createIdentity

}

from "../../core/auth/AuthState";








export default function AuthPortal({


    onIdentityCreated


}) {



    const [created, setCreated] = useState(false);







    function enterWorld(){



        const identity = {


            name:"World Explorer",


            email:"explorer@living.world"



        };







        const newIdentity =

            createIdentity(

                identity

            );








        console.log(

            "🌱 Identity Created",

            newIdentity

        );







        setCreated(true);







        if(onIdentityCreated){


            onIdentityCreated(

                newIdentity

            );


        }



    }









    return (



        <section className="auth-portal">





            <h2>


                🌎 Enter The Living World™


            </h2>






            <p>


                {


                    created


                    ?


                    "Welcome, World Builder™. Your identity has been remembered."


                    :


                    "Create your identity and begin your journey."


                }


            </p>









            {


                !created && (



                    <button


                        className="living-button"


                        onClick={enterWorld}


                    >


                        ✨ Create Identity™


                    </button>



                )


            }





        </section>


    );


}