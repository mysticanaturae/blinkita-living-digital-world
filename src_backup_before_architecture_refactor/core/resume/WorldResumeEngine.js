/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD RESUME ENGINE™

The intelligence layer
that resumes Living Worlds™

Version 1.0
==========================================
*/

import { WorldStorage } from "../storage/WorldStorage";

export const WorldResumeEngine = {

    hasSavedWorld() {

        return WorldStorage.load() !== null;

    },

    loadWorld() {

        return WorldStorage.load();

    },

    getResumeData() {

        const world = WorldStorage.load();

        if (!world) {

            return null;

        }

        return {

            id: world.id,

            currentPortal: world.currentPortal,

            status: world.status,

            progress: world.progress,

            lastActive: world.lastActive

        };

    },

    beginNewWorld() {

        WorldStorage.clear();

    }

};