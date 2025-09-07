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
                    match: /(?<="1TUdFh":).+?"/, // from
                    replace: '"from"'
                },
                {
                    match: /(?<="E466pK":).+?"/, // from
                    replace: '"user"'
                },
                {
                    match: /(?<="i96lOz":)".+?"/, // mentions
                    replace: '"mentions"'
                },
                {
                    match: /(?<="BYvFWl":).+?"/, // mentions
                    replace: '"user"'
                },
                {
                    match: /(?<="CqCvio":).+?"/, // has
                    replace: '"has"'
                },
                {
                    match: /(?<="bhSYbW":).+?"/, // has
                    replace: '"link, embed or file"'
                },
                {
                    match: /(?<="qZ\+7BA":).+?"/, // before
                    replace: '"before"'
                },
                {
                    match: /(?<="h2NzSU":).+?"/, // during
                    replace: '"during"'
                },
                {
                    match: /(?<="KSDx7O":).+?"/, // after
                    replace: '"after"'
                },
                {
                    match: /(?<="Zbbc1N":).+?"/, // before, during, after
                    replace: '"specific date"'
                },
                {
                    match: /(?<="WNpFHR":).+?"/, // in
                    replace: '"in"'
                },
                {
                    match: /(?<="GpM\+..":).+?"/, // in
                    replace: '"channel"'
                },
                {
                    match: /(?<="0B74eX":).+?"/, // pinned
                    replace: '"pinned"'
                },
                {
                    match: /(?<="UJxL3d":).+?"/, // pinned
                    replace: '"true or false"'
                },
                {
                    match: /(?<="us8IQk":).+?"/, // authorType
                    replace: '"authorType"'
                },
                {
                    match: /(?<="qCQzBg":).+?"/, // authorType
                    replace: '"user, bot or webhook"'
                },
            ]
        },
    ],
});
