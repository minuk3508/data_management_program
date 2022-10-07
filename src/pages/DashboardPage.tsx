import { useEffect } from "react";
import { Template } from "Template/Template";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function DashboardPage() {
  const API_KEY = "6SKW0U97IPV2QQV9";
  const CHAEENEL_ID = "1348864";
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.thingspeak.com/channels/${CHAEENEL_ID}/feeds.json?api_key=${API_KEY}`
      );
      const json = await res.json();
      console.log(json);
    })();
  }, []);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
  };
  const items = [{ id: 0, content: 1 }];
  return (
    <Template>
      <Container>
        {/* <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="test">
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                {items.map((item) => (
                  <Draggable key={item.id} draggableId={item.id}>
                    {(provided, snapshot) => (
                      <div>
                        <div ref={provided.innerRef}>{item.content}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext> */}
      </Container>
    </Template>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const TestDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
