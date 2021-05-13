const darkTheme = {
    body:{
        background: {
            color1: "black",
            color2: "rgba(0,0,0,0.5)"
        }
    },
    dnd: {
        headerColor: "#FAC68A",
        backgroundColor: "#white",
        onDragBackgroundColor: "#FAC68A"
    },
    story: {
        background: "#2D2D2D",
        title: "#A4ADE9",
        onDragColor: "#59412A"
    }
}

const lightTheme = {
    body:{
        background: {
            color1: "#2C7ABF",
            color2: "#41C5E7"
        }
    },
    dnd: {
        headerColor: "black",
        backgroundColor: "#ebecf0",
        onDragBackgroundColor: "#daffff",
    },
    story: {
        background: "white",
        title: "black",
        onDragColor: "#7FC7A7"
    }
}

const themeColors = {
    light: lightTheme,
    dark: darkTheme
}

export { themeColors }