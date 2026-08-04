import {
    useEffect
} from "react";


export default function MyLivingModal({

    title,
    eyebrow = "MY LIVING",
    symbol = "✦",
    children,
    onClose

}) {

    useEffect(() => {

        function handleKeyDown(event) {

            if (event.key === "Escape") {

                onClose();

            }

        }


        document.addEventListener(
            "keydown",
            handleKeyDown
        );


        document.body.style.overflow = "hidden";


        return () => {

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );


            document.body.style.overflow = "";

        };

    }, [onClose]);


    return (

        <div
            className="my-living-modal"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onMouseDown={(event) => {

                if (
                    event.target === event.currentTarget
                ) {

                    onClose();

                }

            }}
        >

            <div className="my-living-modal-panel">

                <button

                    type="button"

                    className="my-living-modal-close"

                    onClick={onClose}

                    aria-label="Close"

                >

                    ×

                </button>


                <div className="my-living-modal-header">

                    <div className="my-living-modal-symbol">

                        {symbol}

                    </div>


                    <div>

                        <span className="my-living-modal-eyebrow">

                            {eyebrow}

                        </span>


                        <h2>

                            {title}

                        </h2>

                    </div>

                </div>


                <div className="my-living-modal-content">

                    {children}

                </div>

            </div>

        </div>

    );

}
