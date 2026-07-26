export function validatePortal(portal) {

    const requiredFields = [
        "id",
        "title",
        "subtitle",
        "path",
        "order",
    ];


    const missingFields = requiredFields.filter(
        field => !portal[field]
    );


    return {
        valid: missingFields.length === 0,
        missingFields,
    };
}