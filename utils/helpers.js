export const courseFormMap = {
    title:"title",
    description:'description',

}
export const newsTickerMap = {
    ProfileTicker:"ProfileTicker",
    ScheduleTicker: "ScheduleTicker"
 }

export const techTickerMap = {
   TechStackTicker:"TechStackTicker",
   FocusesTicker:"FocusesTicker"
}

export const highPriorityTickerMap = {
    TitleTicker: "TitleTicker",
    ProblemTicker:"ProblemTicker"
 }
 

export const themeColors={
    Positive: "green",
    Background: "black",
    Negative: "red",
    Grey: "lightgrey",
    Secondary: "purple"

}

export const tickerSpeeds = {
    Crawl:30,
    Slow:50,
    Medium:75,
    Fast:100
}


export const tickerManagerHeights ={
    Full:90,
    Half:45,
    Third:31,
    TwoThirds:60,
    Quarter: 22
}

export const widgetHeights ={
    Small:50,
    Medium:130,
    Tall:200,
}



export const techStackWidgetMap = {
    db:"db",
    hosting:'hosting',
    domain: "domain",
    server: "server",
    ui:"ui"

}

const techStackOthers = {
    
    courseTitle:"courseTitle",
    courseCaedence: "courseCaedence",
    problem:"problem",

}

export const techStackEditables = Object.assign({}, techStackWidgetMap, techStackOthers)