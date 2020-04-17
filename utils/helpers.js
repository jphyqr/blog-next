export const courseFormMap = {
    title:"title",
    description:'description',

}

export const techTickerMap = {
   TechStackTicker:"TechStackTicker",
   FocusesTicker:"FocusesTicker"
}

export const newsTickerMap = {
    ProblemTicker:"ProblemTicker",
    ProfileTicker:"ProfileTicker"
 }

export const techStackWidgetMap = {
    db:"db",
    hosting:'hosting',
    domain: "domain",
    server: "server",
    ui:"ui"

}

const techStackOthers = {
    problem:"problem"
}

export const techStackEditables = Object.assign({}, techStackWidgetMap, techStackOthers)