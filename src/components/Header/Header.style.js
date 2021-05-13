const getHeaderStyle = () => ({
    flexShrink: 0,
    textAlign: 'center',
    backgroundColor: 'cocoa',
    color: 'white',
    padding: "12px 0",
    margin: "-20px"
})

const getHeaderContainerStyle = () => {
    return {
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between"
    }
}

export { getHeaderStyle, getHeaderContainerStyle }