/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

MY LIVING ANALYSIS™

Creator Intelligence Analysis

Version 2.1
==========================================
*/

import {
    useMemo,
    useState
} from "react";

import {
    getWorldState
} from "../../core/state/WorldState";

import "./CreatorAnalysisCard.css";


const STOP_WORDS = new Set([

    "the","and","that","this","with","from","your","you","are",
    "what","when","where","which","have","has","for","into",
    "about","there","their","they","them","then","than","will",
    "would","could","should","been","being","very","just","more",
    "some","also","because","through","only","like","want","need",
    "something","my","me","i","a","an","to","of","in","on","is",
    "it","as","at","be","or","if","do","so","but","not","we","our",
    "je","ki","to","ta","tvoj","tvoja","tvoje","svoj",
    "svoja","svoje","sem","si","so","se","da","ne","za","na","od",
    "do","z","iz","kot","kar","ko","kako","kaj","kjer","ali",
    "bi","bo","bom","bila","bilo","bil","biti","me","mi","moj",
    "moja","moje","te","ti","tudi","že","še","lahko","samo"

]);


function extractPortalMemories() {

    const state =
        getWorldState() || {};

    const portalAnswers =
        state.portalAnswers || {};

    const memories = [];

    Object.entries(
        portalAnswers
    ).forEach(
        ([portalId, data]) => {

            if (!data) {
                return;
            }

            const answer =
                typeof data === "string"
                    ? data
                    : data.response?.answer
                    || data.answer
                    || data.response
                    || "";

            const question =
                data.response?.question
                ||
                data.question
                ||
                "";

            if (
                typeof answer === "string" &&
                answer.trim()
            ) {

                memories.push({

                    portalId,

                    question,

                    answer:
                        answer.trim()

                });

            }

        }
    );

    return memories;

}


function getThemes(
    memories,
    additionalContext
) {

    const source = [

        ...memories.map(
            item => item.answer
        ),

        additionalContext

    ]
        .join(" ")
        .toLowerCase();


    const words =
        source.match(
            /[\p{L}\p{N}'-]{4,}/gu
        ) || [];


    const frequency = {};


    words.forEach(
        word => {

            const normalized =
                word
                    .replace(
                        /^[-']+|[-']+$/g,
                        ""
                    );

            if (
                !normalized ||
                STOP_WORDS.has(normalized)
            ) {
                return;
            }

            frequency[normalized] =
                (frequency[normalized] || 0) + 1;

        }
    );


    return Object.entries(
        frequency
    )
        .sort(
            (a,b) => b[1] - a[1]
        )
        .slice(0,5)
        .map(
            item => item[0]
        );

}


function buildAnalysis(
    memories,
    additionalContext
) {

    const total =
        memories.length;

    const themes =
        getThemes(
            memories,
            additionalContext
        );


    if (total < 9) {

        return {

            complete: false,

            title:
                "Your Living Analysis is waiting for the full picture.",

            message:
                `You have completed ${total} of 9 Living Portals. Each answer becomes part of the material from which your Living Analysis is formed. Complete the remaining portals first, then return here to meet the larger pattern emerging across your answers.`,

            themes: []

        };

    }


    const first =
        memories[0]?.answer || "";

    const last =
        memories[memories.length - 1]?.answer || "";


    const themeText =
        themes.length
            ? themes.join(" · ")
            : "your own recurring language";


    let message =

        `You have now completed all 9 Living Portals. Your answers are no longer nine separate responses. Together they form a first living portrait of the Creator behind what you are here to create.`;


    message += `\n\n`;

    message +=

        `Across your answers, the language that returns most strongly gathers around: ${themeText}. These recurring signals are not being treated as fixed labels. They are clues to what currently has energy, meaning and movement in your creative life.`;


    message += `\n\n`;

    message +=

        `There is also a visible continuity between where you began and where you arrived. Your first response opens one part of the story: “${first.slice(0,240)}${first.length > 240 ? "…" : ""}”`;


    message += `\n\n`;

    message +=

        `And your latest response carries the conversation toward: “${last.slice(0,240)}${last.length > 240 ? "…" : ""}”`;


    message += `\n\n`;

    message +=

        `The important question now is not simply what your answers say. It is what they reveal together. What keeps returning? What feels unmistakably yours? Where do your ideas, values, experiences and creative impulses meet? And where is there still something you have not yet allowed yourself to say?`;


    if (
        additionalContext.trim()
    ) {

        message += `\n\n`;

        message +=

            `You added another piece of the picture after completing the portals. This additional reflection matters because it shows that your original answers were not the end of the process. Something else was still alive and wanted to be included.`;


        message += `\n\n`;

        message +=

            `Your Living Analysis has therefore expanded beyond the original nine answers and now includes what you remembered afterwards.`;

    }


    message += `\n\n`;

    message +=

        `WHAT TO DO NOW`;


    message += `\n\n`;

    message +=

        `Do not rush into creating another thing simply because you have completed the questions. First use this moment to recognize the pattern. Choose the one idea, desire, tension or possibility from this analysis that feels most alive. Bring that into your Creator Dashboard, your Living Intelligence and eventually into a Living World.`;


    message += `\n\n`;

    message +=

        `Your 9 portals were the opening. Your Living Analysis is the first mirror. What you do with what you now see is the beginning of the next layer.`;


    return {

        complete: true,

        title:
            "Your first living pattern is here.",

        message,

        themes

    };

}


export default function CreatorAnalysisCard() {

    const memories =
        useMemo(
            () => extractPortalMemories(),
            []
        );


    const [additionalContext, setAdditionalContext] =
        useState("");


    const [savedAddition, setSavedAddition] =
        useState("");


    const [showFullReading, setShowFullReading] =
        useState(false);


    const analysis =
        useMemo(
            () =>
                buildAnalysis(
                    memories,
                    savedAddition
                ),
            [
                memories,
                savedAddition
            ]
        );


    function updateAnalysis() {

        setSavedAddition(
            additionalContext.trim()
        );

        setShowFullReading(true);

    }


    const previewMessage =
        analysis.message
            .split("\n\n")
            .slice(0, 2)
            .join("\n\n");


    const fullAnalysisParagraphs =
        analysis.message
            .split("\n\n")
            .filter(
                paragraph =>
                    paragraph.trim()
            );


    const firstResponse =
        memories[0]?.answer || "";

    const latestResponse =
        memories[memories.length - 1]?.answer || "";


    return (

        <section className="creator-analysis-card">



                {/* =================================================
                   01 · FIRST COLUMN
                ================================================== */}



                    <div className="creator-analysis-header">

                        <div className="creator-analysis-header-meta">

                            <span className="creator-analysis-eyebrow">
                                MY LIVING ANALYSIS™
                            </span>

                            <span className="creator-analysis-mark">
                                ✦
                            </span>

                        </div>


                        <h2>
                            Your Living Analysis
                        </h2>


                        <p>
                            The first living synthesis of what
                            your 9 Living Portals have revealed
                            about the Creator behind your creation.
                        </p>

                    </div>


                    <div className="creator-analysis-progress">

                        <div className="creator-analysis-progress-label">

                            <span>
                                LIVING PORTALS
                            </span>

                            <strong>
                                {memories.length} / 9
                            </strong>

                        </div>


                        <div className="creator-analysis-progress-track">

                            <div
                                style={{
                                    width:
                                        `${Math.min(
                                            memories.length / 9 * 100,
                                            100
                                        )}%`
                                }}
                            />

                        </div>

                    </div>


                    <div className="creator-analysis-body">

                        <span className="creator-analysis-label">

                            {analysis.complete
                                ? "YOUR FIRST LIVING PATTERN"
                                : "THE ANALYSIS IS STILL UNFOLDING"
                            }

                        </span>


                        <h3>
                            {analysis.title}
                        </h3>


                        {
                            analysis.complete ? (

                                !showFullReading ? (

                                    <>

                                        <p className="creator-analysis-lead">
                                            {previewMessage}
                                        </p>


                                        <button
                                            type="button"
                                            className="creator-analysis-button"
                                            onClick={() =>
                                                setShowFullReading(true)
                                            }
                                        >
                                            GET FULL READING
                                            <span>→</span>
                                        </button>

                                    </>

                                ) : (

                                    <div className="creator-analysis-full">

                                        {
                                            fullAnalysisParagraphs.map(
                                                (
                                                    paragraph,
                                                    index
                                                ) => (

                                                    <p
                                                        key={index}
                                                        className={
                                                            index === 0
                                                                ? "creator-analysis-lead"
                                                                : ""
                                                        }
                                                    >
                                                        {paragraph}
                                                    </p>

                                                )
                                            )
                                        }


                                        <button
                                            type="button"
                                            className="creator-analysis-button"
                                            onClick={() =>
                                                setShowFullReading(false)
                                            }
                                        >
                                            CLOSE FULL READING
                                            <span>↑</span>
                                        </button>

                                    </div>

                                )

                            ) : (

                                <p className="creator-analysis-lead">
                                    {analysis.message}
                                </p>

                            )
                        }

                    </div>


                    {
                        analysis.complete && (

                            <div className="creator-analysis-addition">

                                <div>

                                    <span className="creator-analysis-label">
                                        DID SOMETHING ELSE COME TO YOU?
                                    </span>

                                    <p>
                                        Keep the reflection alive.
                                        Add anything you remembered,
                                        understood or suddenly saw
                                        after completing the 9 portals.
                                    </p>

                                </div>


                                <textarea
                                    value={additionalContext}
                                    onChange={(event) =>
                                        setAdditionalContext(
                                            event.target.value
                                        )
                                    }
                                    rows="5"
                                    placeholder="Write what came to you afterwards..."
                                />


                                <button
                                    type="button"
                                    className="creator-analysis-button"
                                    onClick={updateAnalysis}
                                    disabled={
                                        !additionalContext.trim()
                                    }
                                >
                                    Update My Living Analysis
                                    <span>✦</span>
                                </button>

                            </div>

                        )
                    }


            <div className="creator-analysis-footer">

                <span>
                    MY LIVING ANALYSIS™
                </span>

                <span>
                    9 portals · living pattern · next layer
                </span>

                <span>
                    ✦
                </span>

            </div>

        </section>

    );

}


