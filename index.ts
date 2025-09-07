/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Meleoidas șefu Vencordului
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "ForceEnglishSearch",
    description: "Keep search filters in English",
    authors: [{ name: "Rīper", id: 898175728611389451n }],

    patches: [
        {
            find: /'{"hPBScn":"(?!Dismiss popup window")/,
            replacement: [
                {
                    match: /"1TUdFh":.+?",/, // from
                    replace: ""
                },
                {
                    match: /"E466pK":.+?",/, // from
                    replace: ""
                },
                {
                    match: /"i96lOz":".+?",/, // mentions
                    replace: ""
                },
                {
                    match: /"BYvFWl":.+?",/, // mentions
                    replace: ""
                },
                {
                    match: /"CqCvio":.+?",/, // has
                    replace: ""
                },
                {
                    match: /"bhSYbW":.+?",/, // has
                    replace: ""
                },
                {
                    match: /"qZ\+7BA":.+?",/, // before
                    replace: ""
                },
                {
                    match: /"h2NzSU":.+?",/, // during
                    replace: ""
                },
                {
                    match: /"KSDx7O":.+?",/, // after
                    replace: ""
                },
                {
                    match: /"Zbbc1N":.+?",/, // before, during, after
                    replace: ""
                },
                {
                    match: /"WNpFHR":.+?",/, // in
                    replace: ""
                },
                {
                    match: /"GpM\+..":.+?",/, // in
                    replace: ""
                },
                {
                    match: /"0B74eX":.+?",/, // pinned
                    replace: ""
                },
                {
                    match: /"UJxL3d":.+?",/, // pinned
                    replace: ""
                },
                {
                    match: /"us8IQk":.+?",/, // authorType
                    replace: ""
                },
                {
                    match: /"qCQzBg":.+?",/, // authorType
                    replace: ""
                },
            ]
        },
    ],
});
