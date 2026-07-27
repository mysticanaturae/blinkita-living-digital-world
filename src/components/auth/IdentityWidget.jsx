/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

IDENTITY WIDGET™

The identity layer
of a Living World™

Connected with:
- Auth State™
- Creator Identity™
- World Builder™
- Dashboard System™

Version 2.1

==========================================
*/


import {

    getAuthState,

    createIdentity,

    logout

}

from "../../core/auth/AuthState";



import {

    useNavigate

}

from "react-router-dom";








export default function IdentityWidget(){



    const navigate = useNavigate();




    const auth =

        getAuthState();







    function handleLogout(){


        logout();


        window.location.reload();


    }








    function openCreator(){


        navigate("/creator");


    }








    function openWorld(){


        navigate("/world");


    }









    function handleCreateIdentity(){



        createIdentity({


            name:"New Creator",


            title:"World Builder™",


            archetype:"Explorer"



        });





        navigate("/creator");



    }









    return (



        <section className="identity-widget living-card">







            {

                auth.authenticated


                ?


                (



                    <div className="identity-content">





                        <div className="identity-user">


                            <span>

                                👤

                            </span>



                            <strong>

                                {

                                auth.identity?.name

                                }


                            </strong>



                        </div>









                        <div className="identity-actions">







                            <button

                                className="living-button"

                                onClick={openCreator}

                            >

                                🏛️ Creator Dashboard™

                            </button>









                            <button

                                className="living-button"

                                onClick={openWorld}

                            >

                                🌎 World Dashboard™

                            </button>









                            <button

                                className="living-button"

                                onClick={handleLogout}

                            >

                                🚪 Logout

                            </button>







                        </div>







                    </div>



                )


                :


                (



                    <div className="identity-content">





                        <span>

                            🌱 Explorer Mode

                        </span>









                        <button

                            className="living-button"

                            onClick={handleCreateIdentity}

                        >

                            ✨ Create Identity™

                        </button>







                    </div>



                )


            }







        </section>


    );


}