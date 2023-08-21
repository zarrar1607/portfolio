export const navData = [
    {
        id: 0,
        text: "Software",
        link: "/"
    },
    {
        id: 1,
        text: "Machine Learning",
        link: "explore",
        sublinks: [
            {
                id: 10,
                text: "Sublink 1",
                link: "explore/sublink1"
            },
            {
                id: 11,
                text: "Sublink 2",
                link: "explore/sublink2"
            }
        ]
    },
    {
        id: 2,
        text: "Robotics",
        link: "statistics",
        sublinks: [
            {
                id: 30,
                text: "Sublink 3",
                link: "settings/sublink1"
            },
            {
                id: 31,
                text: "Sublink 4",
                link: "settings/sublink2"
            }
        ]
    },
]
