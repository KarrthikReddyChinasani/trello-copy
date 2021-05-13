const getHeaderTitle = () => ({
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "1.5rem",
    marginLeft: "10%",
    fontWeight: "700",
    color: "#333648",
    textTransform: "capitalize"
})

const getColumnTheme = (dndColors) => {
    return {
        margin: "8px",
        border: "1px solid lightgrey",
        borderRadius: "3px",
        width: "24%",
        height: "min-content",
        backgroundColor: dndColors.backgroundColor,
        boxShadow: "0px 1px 1px rgba(0, 0, 0, .9)",
        flexDirection: "column",
    }
}

const getListStyle = (isDraggingOver, dndColors) => ({
    background: isDraggingOver ? dndColors.onDragBackgroundColor : dndColors.backgroundColor,
});

const getItemStyle = (isDragging, draggableStyle, storyColor) => ({
    userSelect: "none",
    background: isDragging ? storyColor.onDragColor : storyColor.background,
    ...draggableStyle
});



export { getHeaderTitle, getColumnTheme, getListStyle, getItemStyle }