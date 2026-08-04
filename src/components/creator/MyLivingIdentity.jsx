import CreatorEvolutionTimeline
from "./CreatorEvolutionTimeline";


export default function MyLivingIdentity({

    creator

}) {

    return (

        <div className="my-living-identity">

            <div className="my-living-identity-intro">

                <span className="my-living-modal-eyebrow">

                    MY LIVING IDENTITY™

                </span>


                <h3>

                    Your Becoming

                </h3>


                <p>

                    Your identity is not a fixed description.
                    It is a living record of who you are,
                    what you choose and who you are becoming.

                </p>

            </div>


            <div className="my-living-identity-section">

                <CreatorEvolutionTimeline
                    creator={creator}
                />

            </div>


            <div className="my-living-identity-note">

                <span>

                    ✦

                </span>


                <p>

                    Every avatar, choice and meaningful shift
                    can become part of your living identity.

                </p>

            </div>

        </div>

    );

}
