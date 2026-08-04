 /*
==========================================
BLINKITA OS™

CREATOR IDENTITY™

Modular Creator Dashboard component
==========================================
*/

import CreatorEvolutionTimeline
from "./CreatorEvolutionTimeline";


export default function CreatorIdentityCard({

    creator,

    t,

    identityLabels,

    photo,
    avatar,
    setAvatar,

    avatarOptions,
    creatorSymbols,

    fileInputRef,

    handlePhotoChange,
    handleRemovePhoto,

    name,
    setName,

    archetype,
    setArchetype,

    description,
    setDescription,

    saved,
    handleSaveIdentity

}) {

    return (

<section className="living-card living-section creator-identity-card">

                <div className="creator-identity-heading">

                    <div>

                        <span className="creator-identity-eyebrow">

                            CREATOR IDENTITY™

                        </span>


                        <h2>

                            {
                                t(
                                    "dashboard.creatorIdentity"
                                )
                            }

                        </h2>


                        <p>

                            {
                                t(
                                    "dashboard.creatorIdentityPrompt"
                                )
                            }

                        </p>

                    </div>

                </div>


                <div className="creator-identity-layout">

                    <aside className="creator-portrait-panel">

                        <div className="creator-portrait-label">

                            {
                                identityLabels.portrait
                            }

                        </div>


                        <div className="creator-portrait-frame">

                            {

                                photo

                                    ?

                                <img

                                    src={photo}

                                    alt={
                                        identityLabels.portrait
                                    }

                                    className="creator-portrait-image"

                                />

                                    :

                                <div className="creator-avatar-display">

                                    {
                                        avatar
                                    }

                                </div>

                            }

                        </div>


                        <div className="creator-portrait-actions">

                            <button

                                type="button"

                                className="creator-secondary-button"

                                onClick={() =>
                                    fileInputRef.current?.click()
                                }

                            >

                                📷{" "}

                                {
                                    photo
                                        ? identityLabels.change
                                        : identityLabels.upload
                                }

                            </button>


                            {

                                photo && (

                                    <button

                                        type="button"

                                        className="creator-text-button"

                                        onClick={
                                            handleRemovePhoto
                                        }

                                    >

                                        {
                                            identityLabels.remove
                                        }

                                    </button>

                                )

                            }

                        </div>


                        <input

                            ref={fileInputRef}

                            type="file"

                            accept="image/*"

                            onChange={
                                handlePhotoChange
                            }

                            className="creator-photo-input"

                        />


                        <p className="creator-portrait-note">

                            {
                                identityLabels.identityNote
                            }

                        </p>


                        <div className="creator-avatar-section">

                            <span className="creator-field-label">

                                {
                                    identityLabels.avatar
                                }

                            </span>


                            <div className="creator-avatar-grid">

                               {


    avatarOptions.map(

        (option) => (

            <button

                key={option.symbol}

                type="button"

                className={

                    avatar === option.symbol

                        ?

                    "creator-avatar-option active"

                        :

                    "creator-avatar-option"

                }

                onClick={() =>
                    setAvatar(option.symbol)
                }

                aria-label={
                    option.name
                }

            >

                {
                    option.symbol
                }

            </button>

        )

    )

}

                            </div>

                        </div>


<div className="creator-symbol-preview">

    {

        (() => {

            const selectedSymbol =
                creatorSymbols.find(
                    item =>
                    item.symbol === avatar
                );


            if (!selectedSymbol)
                return null;


            return (

                <>

                    <div className="creator-symbol-large">

                        {
                            selectedSymbol.symbol
                        }

                    </div>


                    <h3>

                        {
                            selectedSymbol.name
                        }

                    </h3>


                    <p className="creator-symbol-meaning">

                        {
                            selectedSymbol.meaning
                        }

                    </p>


                    <p className="creator-symbol-message">

                        {
                            selectedSymbol.message
                        }

                    </p>


                </>

            );


        })()

    }

</div>

                    </aside>



                    <div className="creator-identity-fields">

                        <div className="creator-field">

                            <label>

                                {
                                    t(
                                        "dashboard.name"
                                    )
                                }

                            </label>


                            <input

                                type="text"

                                value={name}

                                onChange={(event) =>
                                    setName(
                                        event.target.value
                                    )
                                }

                                placeholder={
                                    t(
                                        "dashboard.yourName"
                                    )
                                }

                            />

                        </div>


                        <div className="creator-field">

                            <label>

                                {
                                    t(
                                        "dashboard.archetype"
                                    )
                                }

                            </label>


                            <input

                                type="text"

                                value={archetype}

                                onChange={(event) =>
                                    setArchetype(
                                        event.target.value
                                    )
                                }

                                placeholder={
                                    t(
                                        "dashboard.archetypePlaceholder"
                                    )
                                }

                            />

                        </div>


                        <div className="creator-field creator-field-wide">

                            <label>

                                {
                                    t(
                                        "dashboard.aboutYou"
                                    )
                                }

                            </label>


                            <textarea

                                value={description}

                                onChange={(event) =>
                                    setDescription(
                                        event.target.value
                                    )
                                }

                                placeholder={
                                    t(
                                        "dashboard.aboutYouPlaceholder"
                                    )
                                }

                                rows="7"

                            />

                                               </div>


                        <div className="creator-identity-save-row">

                            <button

                                type="button"

                                className="journey-button creator-save-button"

                                onClick={
                                    handleSaveIdentity
                                }

                            >

                                {

                                    saved

                                        ?

                                    t(
                                        "dashboard.identitySaved"
                                    )

                                        :

                                    t(
                                        "dashboard.saveIdentity"
                                    )

                                }

                            </button>

                        </div>

                </div>

             </div>
            {/* ==========================================
                IDENTITY EVOLUTION ARCHIVE
                Part of CREATOR IDENTITY™
            ========================================== */}

            <div className="creator-identity-evolution-archive">

                <CreatorEvolutionTimeline
                    creator={creator}
                />

            </div>


            </section>

    );

}
