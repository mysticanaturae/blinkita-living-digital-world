/*
==========================================
BLINKITA OS™

CREATOR BIRTH MATRIX™

Modular Creator Dashboard component
==========================================
*/

export default function CreatorBirthMatrix({

    birthMatrix,
    birthDate,
    setBirthDate,

    handleCalculateBirthMatrix,

    isSlovenian,

    getSignImage

}) {

    return (

        <section className="living-card living-section creator-birth-matrix">

                {

             /* ==========================================
                    HEADER
                ========================================== */}

                <div className="creator-identity-heading creator-birth-matrix-heading">

                    <span className="creator-identity-eyebrow">

                        ⟡ YOUR BIRTH MATRIX™

                    </span>


                    <h2>

                        {
                            isSlovenian
                                ? "Odkrij svoj Živ Čas™"
                                : "Discover Your Living Time™"
                        }

                    </h2>


                    <p>

                        {
                            isSlovenian
                                ? "Tvoj datum rojstva odpre prvo plast tvojega Živega Časa."
                                : "Your birth date opens the first layer of your Living Time."
                        }

                    </p>

                </div>



                {

             /* ==========================================
                    PERMANENT IDENTITY LAYOUT
                ========================================== */}

                <div className="creator-identity-layout birth-matrix-layout">

                    {/* ==========================================
                        LEFT — BIRTH ENERGY
                    ========================================== */}

                    <div className="creator-portrait-panel birth-matrix-portrait-panel">

                        <span className="creator-portrait-label">

                            {
                                isSlovenian
                                    ? "Tvoja rojstna energija"
                                    : "Your Birth Energy"
                            }

                        </span>


                        <div className="creator-portrait-frame birth-matrix-symbol-frame">

                            {
                                birthMatrix?.sign

                                    ?

                                <img

                                    className="creator-portrait-image birth-matrix-sign-image"

                                    src={
                                        getSignImage(
                                            birthMatrix.sign
                                        )
                                    }

                                    alt={
                                        birthMatrix.sign
                                    }

                                />

                                    :

                                <div className="birth-matrix-empty-symbol">

                                    🌀

                                </div>

                            }

                        </div>


                        <p className="creator-portrait-note">

                            {
                                isSlovenian
                                    ? "Tvoj Tzolk'in znak rojstva"
                                    : "Your Tzolk'in birth sign"
                            }

                        </p>


                        <div className="birth-matrix-identity-values">

                            <span>

                                Kin{" "}

                                {
                                    birthMatrix?.kin ?? "—"
                                }

                            </span>


                            <strong>

                                {
                                    birthMatrix
                                        ? `${birthMatrix.tone} ${birthMatrix.sign}`
                                        : "—"
                                }

                            </strong>

                        </div>

                    </div>



                    {

                 /* ==========================================
                        RIGHT — DATE + IDENTITY
                    ========================================== */}

                    <div className="creator-identity-fields birth-matrix-fields">

                        {/* ==========================================
                            DATE OF BIRTH
                        ========================================== */}

                        <div className="creator-field">

                            <label>

                                {
                                    isSlovenian
                                        ? "DATUM ROJSTVA"
                                        : "DATE OF BIRTH"
                                }

                            </label>


                            <input

                                type="date"

                                value={birthDate}

                                onChange={(event) =>
                                    setBirthDate(
                                        event.target.value
                                    )
                                }

                            />

                        </div>


                        <div className="creator-field birth-matrix-action-field">

                            <label>

                                {
                                    isSlovenian
                                        ? "Tvoj Živ Čas"
                                        : "Your Living Time"
                                }

                            </label>


                            <button

                                type="button"

                                className="journey-button creator-birth-matrix-button"

                                onClick={
                                    handleCalculateBirthMatrix
                                }

                                disabled={!birthDate}

                            >

                                {
                                    birthMatrix

                                        ?

                                    (
                                        isSlovenian
                                            ? "Posodobi Birth Matrix™"
                                            : "Update Birth Matrix™"
                                    )

                                        :

                                    (
                                        isSlovenian
                                            ? "Izračunaj Birth Matrix™"
                                            : "Calculate Birth Matrix™"
                                    )
                                }

                            </button>

                        </div>



                        {
                     /* ==========================================
                            CALCULATED IDENTITY
                        ========================================== */}

                        {

                            birthMatrix && (

                                <>

                                    <div className="creator-field">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Tzolk'in identiteta"
                                                    : "Tzolk'in Identity"
                                            }

                                        </label>


                                        <div className="birth-matrix-value">

                                            {
                                                birthMatrix.tone
                                            }{" "}

                                            {
                                                birthMatrix.sign
                                            }

                                        </div>

                                    </div>


                                    <div className="creator-field">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Ime znaka"
                                                    : "Sign Name"
                                            }

                                        </label>


                                        <div className="birth-matrix-value birth-matrix-local-name">

                                            {
                                                birthMatrix.localSign
                                            }

                                        </div>

                                    </div>


                                    <div className="creator-field creator-field-wide">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Živ Čas rojstne energije"
                                                    : "Living Time of Birth Energy"
                                            }

                                        </label>


                                        <div className="birth-matrix-value birth-matrix-signature">

                                            {
                                                isSlovenian
                                                    ? "Tvoja rojstna energija nosi svoj lasten čas, ritem in način izražanja."
                                                    : "Your birth energy carries its own rhythm, timing and way of expressing itself."
                                            }

                                        </div>

                                    </div>



                                    {
  
                                 /* ==========================================
                                        TODAY'S MESSAGE
                                    ========================================== */}

                                    <div className="creator-field creator-field-wide birth-matrix-message">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Današnje sporočilo tvoje rojstne energije"
                                                    : "Today's Message from Your Birth Energy"
                                            }

                                        </label>


                                        <div className="birth-matrix-message-content">

                                            {
                                                currentBirthMessage
                                            }

                                        </div>

                                    </div>



                                    {

                                 /* ==========================================
                                        TODAY'S REFLECTION
                                    ========================================== */}

                                    <div className="creator-field creator-field-wide birth-matrix-reflection">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Današnje vprašanje"
                                                    : "Today's Reflection"
                                            }

                                        </label>


                                        <h4>

                                            {

                                                isSlovenian

                                                    ?

                                                "Kaj želi tvoja rojstna energija danes videti, ustvariti ali spremeniti?"

                                                    :

                                                "What does your birth energy want to see, create or change today?"

                                            }

                                        </h4>


                                        <textarea

                                            value={
                                                birthReflection
                                            }

                                            onChange={(event) =>
                                                setBirthReflection(
                                                    event.target.value
                                                )
                                            }

                                            rows="5"

                                            placeholder={

                                                isSlovenian

                                                    ?

                                                "Zapiši svojo misel..."

                                                    :

                                                "Write what is arising for you..."

                                            }

                                        />


                                        <button

                                            type="button"

                                            className="journey-button creator-save-button birth-matrix-save-button"

                                            onClick={
                                                handleSaveReflection
                                            }

                                        >

                                            {

                                                reflectionSaved

                                                    ?

                                                (
                                                    isSlovenian
                                                        ? "Shranjeno ✓"
                                                        : "Saved ✓"
                                                )

                                                    :

                                                (
                                                    isSlovenian
                                                        ? "Shrani refleksijo"
                                                        : "Save Reflection"
                                                )

                                            }

                                        </button>

                                    </div>



                                    {

                                 /* ==========================================
                                        CHANGE DATE
                                    ========================================== */}

                                    <div className="creator-identity-save-row birth-matrix-change-date-row">

                                        <button

                                            type="button"

                                            className="creator-text-button"

                                            onClick={() => {

                                                setBirthMatrix(null);

                                            }}

                                        >

                                            {

                                                isSlovenian

                                                    ?

                                                "Spremeni datum rojstva"

                                                    :

                                                "Change birth date"

                                            }

                                        </button>

                                    </div>

                                </>

                            )

                        }

                    </div>

                </div>

            </section>

    );

}
