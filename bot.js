// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');
const { AnswerBuilder } = require('./answerBuilder');

class EchoBot extends ActivityHandler {
    constructor(recognizer) {
        super();
        const answerBuilder = new AnswerBuilder();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            const luisRes = await recognizer.executeLuisQuery(context);
            console.log('luisRes ===>', luisRes);
            const response = await answerBuilder.getAnswer(luisRes);
            console.log('response ===>', response);
            await context.sendActivity(MessageFactory.text(response, response));
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Hello and welcome!';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;

// SIG // Begin signature block
// SIG // MIInOgYJKoZIhvcNAQcCoIInKzCCJycCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // Ob7KGRKcpsQeZeomf5Qo/JN1O2IaZx3TkaHBl3ahHamg
// SIG // ghFpMIIIezCCB2OgAwIBAgITNgAAAQoPho466z+WJAAB
// SIG // AAABCjANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjAwMjA5MTMy
// SIG // MzUyWhcNMjEwMjA4MTMyMzUyWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmksYDtPDjCJA
// SIG // wYT+bRbc/za1SLbO4O/xggy6YQ9QuXm4+S8EWyZwwmQC
// SIG // W2CXDjg/PtR3/p2z9GvhOPA/PRWd/t1pc+CyntYvsvRI
// SIG // Qb4L0v+8ZPD4CeXncaccALGfkBGejMtPDN/SdHlbt4Sw
// SIG // hWJBL12YicfL1rcDPUIc6QveY14RW2ltSevfA85RyZqV
// SIG // zfL58dddyhxWBmAToCEnDisGUaakCqfKq1jC2I66nfGG
// SIG // rsvgJ8ENXcHPx16/iL2PEfOe+9dS698NFf3fqUsg57ZC
// SIG // xcoe8J726qdR+NPB/CwOdwsUfvg9adKkzEPbuf+wKtT4
// SIG // FASHRD7fvav5eF6mFCuCRwIDAQABo4IFhzCCBYMwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgxKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgxKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgxKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgxKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgxKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUm4u2/aDP2bNDS/41
// SIG // o9okfYFEuyUwDgYDVR0PAQH/BAQDAgeAMFQGA1UdEQRN
// SIG // MEukSTBHMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFu
// SIG // ZCBPcGVyYXRpb25zIExpbWl0ZWQxFjAUBgNVBAUTDTIz
// SIG // NjE2Nys0NTc3OTAwggHUBgNVHR8EggHLMIIBxzCCAcOg
// SIG // ggG/oIIBu4Y8aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraWluZnJhL0NSTC9BTUUlMjBDUyUyMENBJTIwMDEu
// SIG // Y3Jshi5odHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9BTUUl
// SIG // MjBDUyUyMENBJTIwMDEuY3Jshi5odHRwOi8vY3JsMi5h
// SIG // bWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIwMDEuY3Js
// SIG // hi5odHRwOi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBD
// SIG // UyUyMENBJTIwMDEuY3Jshi5odHRwOi8vY3JsNC5hbWUu
// SIG // Z2JsL2NybC9BTUUlMjBDUyUyMENBJTIwMDEuY3JshoG6
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEsQ049
// SIG // QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMlMjBL
// SIG // ZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25m
// SIG // aWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlmaWNh
// SIG // dGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENsYXNz
// SIG // PWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQYMBaA
// SIG // FBtmohn8m+ul2oSPGJjpEKTDe5K9MB8GA1UdJQQYMBYG
// SIG // CisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3DQEB
// SIG // CwUAA4IBAQB6CaQpdnylIZthgJx+fpLUNd0WQle+awqq
// SIG // uXwQpW4djrUqFoI43kR5F1JPWD/FrnEFke75R1wTNmaC
// SIG // Gkr7qCOC3i2W6+wqqddxANRNjkHuphOc15TiwGIcK1ug
// SIG // oS4A5Ijp0Zai65CnlLcy+xswbEnxEfg/12sHM4HfA9k+
// SIG // rHe2Lyfhqnyf2TOI/Gd4Czcmh2EUV/vG5DPmkBXYdOT4
// SIG // /F9M+qqUwW+oOD8ppZatlhz+4Z6KsEjXke4YOlTjvJPt
// SIG // cK+fWQxryrxz9XHYNmX2WbB4HdwYdWFuNsQZ7oB0ReOp
// SIG // J28cIBQgAq4lnuwDGOoTuNC9KHIzxZH9et8FotSwgSOA
// SIG // MIII5jCCBs6gAwIBAgITHwAAABS0xR/G8oC+cQAAAAAA
// SIG // FDANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPyLGQB
// SIG // GRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAwDgYD
// SIG // VQQDEwdhbWVyb290MB4XDTE2MDkxNTIxMzMwM1oXDTIx
// SIG // MDkxNTIxNDMwM1owQTETMBEGCgmSJomT8ixkARkWA0dC
// SIG // TDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UEAxMM
// SIG // QU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEFAAOC
// SIG // AQ8AMIIBCgKCAQEA1VeBAtb5+tD3G4C53TfNJNxmYfzh
// SIG // iXKtKQzSGxuav660bTS1VEeDDjSnFhsmnlb6GkPCeYmC
// SIG // JwWgZGs+3oWJ8yad3//VoP99bXG8azzTJmT2PFM1yKxU
// SIG // XUJgi7I9y3C4ll/ATfBwbGGRXD+2PdkdlVpxKWzeNEPV
// SIG // wbCtxWjUhHr6Ecy9R6O23j+2/RSZSgfzYctDzDWhNf0P
// SIG // vGPflm31PSk4+ozca337/Ozu0+naDKg5i/zFHhfSJZkq
// SIG // 5dPPG6C8wDrdiwHh6G5IGrMd2QXnmvEfjtpPqE+G8MeW
// SIG // bszaWxlxEjQJQC6PBwn+8Qt4Vqlc0am3Z3fBw8kzRunO
// SIG // s8Mn/wIDAQABo4IE2jCCBNYwEAYJKwYBBAGCNxUBBAMC
// SIG // AQEwIwYJKwYBBAGCNxUCBBYEFJH8M85CnvaT5uJ9VNcI
// SIG // GLu413FlMB0GA1UdDgQWBBQbZqIZ/JvrpdqEjxiY6RCk
// SIG // w3uSvTCCAQQGA1UdJQSB/DCB+QYHKwYBBQIDBQYIKwYB
// SIG // BQUHAwEGCCsGAQUFBwMCBgorBgEEAYI3FAIBBgkrBgEE
// SIG // AYI3FQYGCisGAQQBgjcKAwwGCSsGAQQBgjcVBgYIKwYB
// SIG // BQUHAwkGCCsGAQUFCAICBgorBgEEAYI3QAEBBgsrBgEE
// SIG // AYI3CgMEAQYKKwYBBAGCNwoDBAYJKwYBBAGCNxUFBgor
// SIG // BgEEAYI3FAICBgorBgEEAYI3FAIDBggrBgEFBQcDAwYK
// SIG // KwYBBAGCN1sBAQYKKwYBBAGCN1sCAQYKKwYBBAGCN1sD
// SIG // AQYKKwYBBAGCN1sFAQYKKwYBBAGCN1sEAQYKKwYBBAGC
// SIG // N1sEAjAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTAL
// SIG // BgNVHQ8EBAMCAYYwEgYDVR0TAQH/BAgwBgEB/wIBADAf
// SIG // BgNVHSMEGDAWgBQpXlFeZK40ueusnA2njHUB0QkLKDCC
// SIG // AWgGA1UdHwSCAV8wggFbMIIBV6CCAVOgggFPhiNodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYx
// SIG // aHR0cDovL2NybC5taWNyb3NvZnQuY29tL3BraWluZnJh
// SIG // L2NybC9hbWVyb290LmNybIYjaHR0cDovL2NybDIuYW1l
// SIG // LmdibC9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwz
// SIG // LmFtZS5nYmwvY3JsL2FtZXJvb3QuY3JshoGqbGRhcDov
// SIG // Ly9DTj1hbWVyb290LENOPUFNRVJPT1QsQ049Q0RQLENO
// SIG // PVB1YmxpYyUyMEtleSUyMFNlcnZpY2VzLENOPVNlcnZp
// SIG // Y2VzLENOPUNvbmZpZ3VyYXRpb24sREM9QU1FLERDPUdC
// SIG // TD9jZXJ0aWZpY2F0ZVJldm9jYXRpb25MaXN0P2Jhc2U/
// SIG // b2JqZWN0Q2xhc3M9Y1JMRGlzdHJpYnV0aW9uUG9pbnQw
// SIG // ggGrBggrBgEFBQcBAQSCAZ0wggGZMDcGCCsGAQUFBzAC
// SIG // hitodHRwOi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVST09U
// SIG // X2FtZXJvb3QuY3J0MEcGCCsGAQUFBzAChjtodHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpaW5mcmEvY2VydHMv
// SIG // QU1FUk9PVF9hbWVyb290LmNydDA3BggrBgEFBQcwAoYr
// SIG // aHR0cDovL2NybDIuYW1lLmdibC9haWEvQU1FUk9PVF9h
// SIG // bWVyb290LmNydDA3BggrBgEFBQcwAoYraHR0cDovL2Ny
// SIG // bDMuYW1lLmdibC9haWEvQU1FUk9PVF9hbWVyb290LmNy
// SIG // dDCBogYIKwYBBQUHMAKGgZVsZGFwOi8vL0NOPWFtZXJv
// SIG // b3QsQ049QUlBLENOPVB1YmxpYyUyMEtleSUyMFNlcnZp
// SIG // Y2VzLENOPVNlcnZpY2VzLENOPUNvbmZpZ3VyYXRpb24s
// SIG // REM9QU1FLERDPUdCTD9jQUNlcnRpZmljYXRlP2Jhc2U/
// SIG // b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlvbkF1dGhvcml0
// SIG // eTANBgkqhkiG9w0BAQsFAAOCAgEAKLdKhpqPH6QBaM3C
// SIG // AOqQi8oA4WQeZLW3QOXNmWm7UA018DQEa1yTqEQbuD5O
// SIG // lR1Wu/F289DmXNTdsZM4GTKEaZehIiVaMoLvEJtu5h6C
// SIG // TyfWqPetNyOJqR1sGqod0Xwn5/G/zcTYSxn5K3N8Kdlc
// SIG // DrZAIyfq3yaEJYHGnA9eJ/f1RrfbJgeo/RAhICctOONw
// SIG // fpsBXcgiTuTmlD/k0DqogvzJgPq9GOkIyX/dxk7IkPzX
// SIG // /n484s0zHR4IKU58U3G1oPSQmZ5OHAvgHaEASkdN5E20
// SIG // HyJv5zN7du+QY08fI+VIci6pagLfXHYaTX3ZJ/MUM9XU
// SIG // +oU5y4qMLzTj1JIG0LVfuHK8yoB7h2inyTe7bn6h2G8N
// SIG // xZ02aKZ0xa+n/JnoXKNsaVPG1SoTuItMsXV5pQtIShsB
// SIG // qnXqFjY3bJMlMhIofMcjiuOwRCW+prZ+PoYvE2P+ML7g
// SIG // s3L65GZ9BdKF3fSW3TvmpOujPQ23rzSle9WGxFJ02fNb
// SIG // aF9C7bG44uDzMoZU4P+uvQaB7KE4OMqAvYYfFy1tv1dp
// SIG // VIN/qhx0H/9oNiOJpuZZ39ZibLt9DXbsq5qwyHmdJXai
// SIG // sxwB53wJshUjc1i76xqFPUNGb8EZQ3aFKl2w9B47vfBi
// SIG // +nU3sN0tpnLPtew4LHWq4LBD5uiNZVBOYosZ6BKhSlk1
// SIG // +Y/0y1IxghUpMIIVJQIBATBYMEExEzARBgoJkiaJk/Is
// SIG // ZAEZFgNHQkwxEzARBgoJkiaJk/IsZAEZFgNBTUUxFTAT
// SIG // BgNVBAMTDEFNRSBDUyBDQSAwMQITNgAAAQoPho466z+W
// SIG // JAABAAABCjANBglghkgBZQMEAgEFAKCBrjAZBgkqhkiG
// SIG // 9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgEL
// SIG // MQ4wDAYKKwYBBAGCNwIBFTAvBgkqhkiG9w0BCQQxIgQg
// SIG // pG6wCghJHsmRrsn2WVZ2a63q3Gmj8ECb8oTGLD20QVcw
// SIG // QgYKKwYBBAGCNwIBDDE0MDKgFIASAE0AaQBjAHIAbwBz
// SIG // AG8AZgB0oRqAGGh0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bTANBgkqhkiG9w0BAQEFAASCAQA1nn/DstW1Im+nanYQ
// SIG // bnvBWl19cuPf6RdD3EURKPESEjAqRV0Gkr8Bb25ieQsy
// SIG // FiMK9x5ptu50MU2MMTmtwI51r7Tau8GHQBrhj/3acCkp
// SIG // 1YQxRwl4bJT3xZLe5k5f12hWdQluF5GSToZ4NLZaEvVt
// SIG // rKdIDounty6v6NwhXrfz7ijAkIdeSfqBN1EbdB9XzLjn
// SIG // txamySj6kxHsFgyR4oVxmwe6Y87rg8wuldKZ+2Elrbgo
// SIG // cLhkAJ0pjKdx8I0ItK7YIuOUgDjidSj7JYvQZxRI7Yr7
// SIG // s1/bOlrWxBtKrnnW3UqW+YglQ3VQ8T8iYfLthuCLel8o
// SIG // nxAUXTeQMaL8S0QKoYIS8TCCEu0GCisGAQQBgjcDAwEx
// SIG // ghLdMIIS2QYJKoZIhvcNAQcCoIISyjCCEsYCAQMxDzAN
// SIG // BglghkgBZQMEAgEFADCCAVUGCyqGSIb3DQEJEAEEoIIB
// SIG // RASCAUAwggE8AgEBBgorBgEEAYRZCgMBMDEwDQYJYIZI
// SIG // AWUDBAIBBQAEIHIiLLtY2J2Dklp+z+VY3K3IUiZCDUeA
// SIG // BnHg1txSdCu2AgZfiEOHx3AYEzIwMjAxMDI2MjIwMDM2
// SIG // LjU4NlowBIACAfSggdSkgdEwgc4xCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBPcGVyYXRp
// SIG // b25zIFB1ZXJ0byBSaWNvMSYwJAYDVQQLEx1UaGFsZXMg
// SIG // VFNTIEVTTjo3ODgwLUUzOTAtODAxNDElMCMGA1UEAxMc
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZaCCDkQw
// SIG // ggT1MIID3aADAgECAhMzAAABKKAOgeE21U/CAAAAAAEo
// SIG // MA0GCSqGSIb3DQEBCwUAMHwxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFBDQSAyMDEwMB4XDTE5MTIxOTAxMTUwMFoXDTIxMDMx
// SIG // NzAxMTUwMFowgc4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKTAn
// SIG // BgNVBAsTIE1pY3Jvc29mdCBPcGVyYXRpb25zIFB1ZXJ0
// SIG // byBSaWNvMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjo3
// SIG // ODgwLUUzOTAtODAxNDElMCMGA1UEAxMcTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgU2VydmljZTCCASIwDQYJKoZIhvcN
// SIG // AQEBBQADggEPADCCAQoCggEBAJ2Rsdb3VNuGPs2/Dgpc
// SIG // 9gt77LG0JPkD4VWTlEJLkqznTJl+RoZfiOwN6iWfPu4k
// SIG // /kj8nwY7pvLs1OsBy494yusg4rHLwHNUJPtw1Tc54MOL
// SIG // gdcosA4Nxki73fDyqWwDtjOdk6H7kNczBPqADD6B98ot
// SIG // 77/wSACBJIxm9qAUudquS5fczCF0++aWUavDu46U3cv6
// SIG // HEjIdV2ZdJTUKg4WUIdTYMQXI082+qSs45WBZjcK98/t
// SIG // Ifx8uq8q8ksWF9+zUjGTFiMaKHhn7cSCoEj7E1tVmW08
// SIG // ISpS678WFP2+A0OQwaWcJKNACK+J+La7Lz2bGupCidOG
// SIG // z5XDewc1lD9nLPcCAwEAAaOCARswggEXMB0GA1UdDgQW
// SIG // BBSE4vKD8X61N5vUAcNOdH9QBMum8jAfBgNVHSMEGDAW
// SIG // gBTVYzpcijGQ80N7fEYbxTNoWoVtVTBWBgNVHR8ETzBN
// SIG // MEugSaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NybC9wcm9kdWN0cy9NaWNUaW1TdGFQQ0FfMjAx
// SIG // MC0wNy0wMS5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsG
// SIG // AQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NlcnRzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAx
// SIG // LmNydDAMBgNVHRMBAf8EAjAAMBMGA1UdJQQMMAoGCCsG
// SIG // AQUFBwMIMA0GCSqGSIb3DQEBCwUAA4IBAQCLX2ZHGIUL
// SIG // gDk/iccHWUywjDyAsBHlhkmtmBp4lldwL3dNo0bXZZHi
// SIG // SZB+c2KzvPqY64BlECjS/Pqur2m9UaT1N0BeUowRHQT8
// SIG // 8wdzd94gYqKXmLDbVR8yeVgBkcP/JiVWbXdQzcz1ETHg
// SIG // Wrh+uzA8BwUgAaHJw+nXYccIuDgPJM1UTeNl9R5Ovf+6
// SIG // zR2E5ZI4DrIqvS4jH4QsoMPTn27AjN7VZt4amoRxMLEc
// SIG // QAS7vPT1JUUaRFpFHmkUYVln1YMsw///6968aRvy3cmC
// SIG // lS44uxkkaILbhh1h09ejZjHhrEn+k9McVkWiuY724jJ/
// SIG // 57tylM7A/jzIWNj1F8VlhkyyMIIGcTCCBFmgAwIBAgIK
// SIG // YQmBKgAAAAAAAjANBgkqhkiG9w0BAQsFADCBiDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEyMDAGA1UEAxMpTWljcm9zb2Z0
// SIG // IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IDIwMTAw
// SIG // HhcNMTAwNzAxMjEzNjU1WhcNMjUwNzAxMjE0NjU1WjB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDCCASIwDQYJ
// SIG // KoZIhvcNAQEBBQADggEPADCCAQoCggEBAKkdDbx3EYo6
// SIG // IOz8E5f1+n9plGt0VBDVpQoAgoX77XxoSyxfxcPlYcJ2
// SIG // tz5mK1vwFVMnBDEfQRsalR3OCROOfGEwWbEwRA/xYIiE
// SIG // VEMM1024OAizQt2TrNZzMFcmgqNFDdDq9UeBzb8kYDJY
// SIG // YEbyWEeGMoQedGFnkV+BVLHPk0ySwcSmXdFhE24oxhr5
// SIG // hoC732H8RsEnHSRnEnIaIYqvS2SJUGKxXf13Hz3wV3Ws
// SIG // vYpCTUBR0Q+cBj5nf/VmwAOWRH7v0Ev9buWayrGo8noq
// SIG // CjHw2k4GkbaICDXoeByw6ZnNPOcvRLqn9NxkvaQBwSAJ
// SIG // k3jN/LzAyURdXhacAQVPIk0CAwEAAaOCAeYwggHiMBAG
// SIG // CSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBTVYzpcijGQ
// SIG // 80N7fEYbxTNoWoVtVTAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBTV9lbLj+iiXGJo0T2UkFvX
// SIG // zpoYxDBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcmwwWgYIKwYB
// SIG // BQUHAQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1Jvb0Nl
// SIG // ckF1dF8yMDEwLTA2LTIzLmNydDCBoAYDVR0gAQH/BIGV
// SIG // MIGSMIGPBgkrBgEEAYI3LgMwgYEwPQYIKwYBBQUHAgEW
// SIG // MWh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9QS0kvZG9j
// SIG // cy9DUFMvZGVmYXVsdC5odG0wQAYIKwYBBQUHAgIwNB4y
// SIG // IB0ATABlAGcAYQBsAF8AUABvAGwAaQBjAHkAXwBTAHQA
// SIG // YQB0AGUAbQBlAG4AdAAuIB0wDQYJKoZIhvcNAQELBQAD
// SIG // ggIBAAfmiFEN4sbgmD+BcQM9naOhIW+z66bM9TG+zwXi
// SIG // qf76V20ZMLPCxWbJat/15/B4vceoniXj+bzta1RXCCtR
// SIG // gkQS+7lTjMz0YBKKdsxAQEGb3FwX/1z5Xhc1mCRWS3Tv
// SIG // QhDIr79/xn/yN31aPxzymXlKkVIArzgPF/UveYFl2am1
// SIG // a+THzvbKegBvSzBEJCI8z+0DpZaPWSm8tv0E4XCfMkon
// SIG // /VWvL/625Y4zu2JfmttXQOnxzplmkIz/amJ/3cVKC5Em
// SIG // 4jnsGUpxY517IW3DnKOiPPp/fZZqkHimbdLhnPkd/DjY
// SIG // lPTGpQqWhqS9nhquBEKDuLWAmyI4ILUl5WTs9/S/fmNZ
// SIG // JQ96LjlXdqJxqgaKD4kWumGnEcua2A5HmoDF0M2n0O99
// SIG // g/DhO3EJ3110mCIIYdqwUB5vvfHhAN/nMQekkzr3ZUd4
// SIG // 6PioSKv33nJ+YWtvd6mBy6cJrDm77MbL2IK0cs0d9LiF
// SIG // AR6A+xuJKlQ5slvayA1VmXqHczsI5pgt6o3gMy4SKfXA
// SIG // L1QnIffIrE7aKLixqduWsqdCosnPGUFN4Ib5KpqjEWYw
// SIG // 07t0MkvfY3v1mYovG8chr1m1rtxEPJdQcdeh0sVV42ne
// SIG // V8HR3jDA/czmTfsNv11P6Z0eGTgvvM9YBS7vDaBQNdrv
// SIG // CScc1bN+NR4Iuto229Nfj950iEkSoYIC0jCCAjsCAQEw
// SIG // gfyhgdSkgdEwgc4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKTAn
// SIG // BgNVBAsTIE1pY3Jvc29mdCBPcGVyYXRpb25zIFB1ZXJ0
// SIG // byBSaWNvMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjo3
// SIG // ODgwLUUzOTAtODAxNDElMCMGA1UEAxMcTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgU2VydmljZaIjCgEBMAcGBSsOAwIa
// SIG // AxUAMT1LG/KAEj0XsiL9n7mxmX1afZuggYMwgYCkfjB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDANBgkqhkiG
// SIG // 9w0BAQUFAAIFAONBQeowIhgPMjAyMDEwMjYxNjM5MDZa
// SIG // GA8yMDIwMTAyNzE2MzkwNlowdzA9BgorBgEEAYRZCgQB
// SIG // MS8wLTAKAgUA40FB6gIBADAKAgEAAgIdjwIB/zAHAgEA
// SIG // AgIRhjAKAgUA40KTagIBADA2BgorBgEEAYRZCgQCMSgw
// SIG // JjAMBgorBgEEAYRZCgMCoAowCAIBAAIDB6EgoQowCAIB
// SIG // AAIDAYagMA0GCSqGSIb3DQEBBQUAA4GBAFMtUNA1HmQE
// SIG // DaFj1C/IPWkAKWk85vsnmRIwABrCx4UfKY5bpd5M4lI9
// SIG // C4H8urq/jjdcF31RombG+/C647AmrUoX5eP2+soLoCdf
// SIG // gxyBs8oJSF8uW9NSSfffvafXAO9ebLYNa5Upfgz9izq2
// SIG // /+hJu6gabSfY7m3GnYCfp2ynrXqGMYIDDTCCAwkCAQEw
// SIG // gZMwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMd
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTACEzMA
// SIG // AAEooA6B4TbVT8IAAAAAASgwDQYJYIZIAWUDBAIBBQCg
// SIG // ggFKMBoGCSqGSIb3DQEJAzENBgsqhkiG9w0BCRABBDAv
// SIG // BgkqhkiG9w0BCQQxIgQgKFBDHuo0XozBFm+C1HR1YoNz
// SIG // YHXb/QewAXMvVZibQakwgfoGCyqGSIb3DQEJEAIvMYHq
// SIG // MIHnMIHkMIG9BCC8RWqLrwVSd+/cGxDfBqS4b1tPXhoP
// SIG // FrC615vV1ugU2jCBmDCBgKR+MHwxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFBDQSAyMDEwAhMzAAABKKAOgeE21U/CAAAAAAEo
// SIG // MCIEIHiFrcyZ9V8+4X0kcjXng5cIgkV92CxcAMHjmmoJ
// SIG // 7EDoMA0GCSqGSIb3DQEBCwUABIIBAFU0hXCr3AGP+XLB
// SIG // DtuSchddkKHYRuDecVQJ77w02Q5273ZqFEOreaT+X/Uh
// SIG // a5qcT9/os9y9LION4PjMgUGr0s5ail9Y+nwdCIiYzs0Z
// SIG // iuoY5MO/i/6HRXN3eNzj1WLYubt4k9dHkAchjBJHj9+s
// SIG // Q4zafI/od/dKFTbL3kOqJNDFag7YQ2JbzdhR4GFDBk+t
// SIG // ML6poS9WPVBiUOGFE6xrJpda1oywOTAeFoXDgpfBx4Hc
// SIG // 8W/5WheDFEg3FPWtwK7RkerTBN8NS7bS2bvb2AXBK1zz
// SIG // i/YdK8hD7nafTvKvHrCi4INeyZ20J14Gr20Dru2FTcHV
// SIG // gMWEq3Kfl9HTqDzu6lc=
// SIG // End signature block
