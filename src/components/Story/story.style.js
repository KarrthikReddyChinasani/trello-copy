const tagColors = {
    bug: { background: "#DE3C4B", text: "#fafafa" },
    task: { background:  "#F5BB00", text: "#333648" }
}

const getStoryCardStyle = ( isDragging, storyColors) => ({
    padding: "15px",
    marginBottom: "10px",
    marginLeft: "5px",
    marginRight: "5px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, .4)",
    backgroundColor: isDragging ? storyColors.onDragColor : storyColors.background
})

const getStoryTitleStyle = (storyColors) => {
    return {
        fontSize: "1rem",
        fontWeight: 600,
        opacity: .8,
        color: storyColors.title
    }
}

const getTagStyle = (tag) => ({
        fontSize: ".7rem",
        marginTop: "6px",
        width: "min-content",
        position: "relative",
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingTop: "3px",
        paddingBottom: "3px",
        borderRadius: "3px",
        fontWeight: 600,
        opacity: .9,
        backgroundColor: tagColors[tag].background,
        color: tagColors[tag].text,
})

const getStoryDescStyle = (storyColors) => ({
    fontSize: ".8rem",
    fontWeight: 300,
    opacity: .8,
    paddingBottom: "6px",
    color: storyColors.title
})

export { getStoryTitleStyle, getStoryCardStyle, getTagStyle, getStoryDescStyle  }