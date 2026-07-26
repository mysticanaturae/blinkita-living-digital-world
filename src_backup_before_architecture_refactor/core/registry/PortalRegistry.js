import { portals } from "../data/portals";


export function getPortal(id) {

    return portals.find(
        portal => portal.id === id
    );

}


export function getAllPortals() {

    return [...portals].sort(
        (a, b) => a.order - b.order
    );

}


export function getPortalByPath(path) {

    return portals.find(
        portal => portal.path === path
    );

}


export function getNextPortal(id) {

    const orderedPortals = getAllPortals();

    const currentIndex = orderedPortals.findIndex(
        portal => portal.id === id
    );


    return orderedPortals[currentIndex + 1] || null;

}


export function getPreviousPortal(id) {

    const orderedPortals = getAllPortals();

    const currentIndex = orderedPortals.findIndex(
        portal => portal.id === id
    );


    return orderedPortals[currentIndex - 1] || null;

}


export function getPortalJourney() {

    return getAllPortals();

}