export default TranslateUrl(language, urlName) {
    var urlDictionary = { 
        se: [
            {url: "#home"},
            {about: "#services"},
        ],
        pt: [
            {url: "#home"},
            {about: "#services"},
        ],
        en: [
            {url: "#home"},
            {about: "#services"},
        ],
    }
    return `${urlDictionary[language][urlName]}`
}