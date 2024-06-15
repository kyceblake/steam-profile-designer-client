import React from "react";
import styled from "styled-components";
import { getSelectedItems } from "../../redux/slices/selectedItemsSlice";
import { useSelector } from "react-redux";
import Media from "../Card/Media";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 5px;
`;

const Item = styled.div`
  display: flex;

  img,
  video {
    max-height: 48px;
    border-radius: 3px;

    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0, 0.73, 0.48, 1);
    transition-property: transform;
    transform-origin: 50% 50%;
    transition-property: transform, filter;
  }
`;

export default function ActiveItems() {
  const selectedItems = useSelector(getSelectedItems);

  return (
    <Wrapper>
      {Object.keys(selectedItems).map((i) => {
        if (selectedItems[i]) {
          let item = selectedItems[i];

          return (
            <Item key={item.appid + item.defid}>
              <Media
                appid={item.appid}
                type={item.community_item_class}
                meta={item.community_item_data}
              />
            </Item>
          );
        }
      })}
    </Wrapper>
  );
}
