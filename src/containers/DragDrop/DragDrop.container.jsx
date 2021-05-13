import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Story from '../../components/Story/Story.component';
import { getHeaderTitle, getColumnTheme, getListStyle, getItemStyle } from './DragDrop.style';
import { moveStories, reorderStories } from './DragDrop.util';
import ThemeProvider from '../../context/ThemeProvider.context';


const DragDropContainer = ({ data, setData }) => {
    const {theme : {dnd : dndColors, story: storyColor}} = useContext(ThemeProvider)
    const getStoryListByType = (id) => data[id];

    const onDragEnd = result => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorderStories(
                getStoryListByType(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            Object.keys(data).forEach(item => {
                if (source.droppableId === item) {
                    state = { [item]: items };
                }
            })

            setData({ ...data, ...state })
        } else {
            const result = moveStories(
                getStoryListByType(source.droppableId),
                getStoryListByType(destination.droppableId),
                source,
                destination
            );
            setData({ ...data, ...result })
        }
    };

    return (

        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ display: "flex" }}>
                {
                    Object.keys(data).map(header => (
                        <Droppable droppableId={header} key={`${header}`} >
                            {(provided, snapshot) => (
                                <div style={getColumnTheme(dndColors)}>
                                    <div style={getHeaderTitle()}>{header}</div>
                                    <div style={getListStyle(snapshot.isDraggingOver, dndColors)} ref={provided.innerRef}>
                                        {
                                            data[header].map((story, index) => (
                                                <Draggable
                                                    key={story.id}
                                                    draggableId={`${story.id}`}
                                                    index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style,
                                                                storyColor
                                                            )}>
                                                            <Story task={story} index={index} status={header} isDragging={snapshot.isDragging}/>
                                                        </div>
                                                    )}
                                                </Draggable>))
                                        }
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>))
                }
            </div>
        </DragDropContext>)
}

DragDropContainer.propTypes = {
    data: PropTypes.object,
    onMove: PropTypes.func
}

DragDropContainer.defaultProps = {
    data: {
        resources: [],
        todo: [],
        doing: [],
        done: []
    },
    setData: () => { }
}
export default DragDropContainer;

