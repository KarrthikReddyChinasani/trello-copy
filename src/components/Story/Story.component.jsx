import React, { useContext } from 'react'
import ThemeProvider from '../../context/ThemeProvider.context';
import { getStoryTitleStyle, getStoryCardStyle, getTagStyle, getStoryDescStyle } from './story.style';


const Story = ({ task, status, index, isDragging }) => {
    const {theme : {story : storyColors}} = useContext(ThemeProvider)
    return (
    <div style={getStoryCardStyle(isDragging, storyColors)} key={index}>
        <h3 style={getStoryTitleStyle(storyColors)}>{task.story_name}</h3>
        <span style={getStoryDescStyle(storyColors)}>{task.desc}</span>
        <h6 style={getTagStyle(task.tag)}>{task.tag.toUpperCase()}</h6>
    </div>
    )

}

export default Story;