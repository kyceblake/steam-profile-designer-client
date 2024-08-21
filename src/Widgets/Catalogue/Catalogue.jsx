import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { useEffect } from "react";

// TODO:
// const items = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// const isItemLoaded = (x,y) => items[x][y];

const LOADING = 1;
const LOADED = 2;
let itemStatusMap = {};
const NUM_COLUMNS = 4;

const isItemLoaded = (index) => !!itemStatusMap[index];
const loadMoreItems = (startIndex, stopIndex) => {
  for (let index = startIndex; index <= stopIndex; index++) {
    itemStatusMap[index] = LOADING;
  }
  return new Promise((resolve) =>
    setTimeout(() => {
      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = LOADED;
      }
      resolve();
    }, 2500)
  );
};

function Cell({ columnIndex, rowIndex, style, ...etc }) {
  useEffect(() => {
    console.log(etc.data[0]);
  }, []);
  let label;
  const itemIndex = rowIndex * NUM_COLUMNS + columnIndex;
  if (itemStatusMap[itemIndex] === LOADED) {
    label = `Cell (${rowIndex}, ${columnIndex})`;
  } else {
    label = "Loading...";
  }
  return (
    <div className="ListItem" style={style}>
      {label}
    </div>
  );
}

export default function Catalogue() {
  return (
    <div style={{ flex: "1 1 auto" }}>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={1000}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <Grid
                height={height}
                width={width}
                columnCount={NUM_COLUMNS}
                columnWidth={100}
                rowCount={1000}
                rowHeight={100}
                onItemsRendered={(gridProps) => {
                  onItemsRendered({
                    overscanStartIndex:
                      gridProps.overscanRowStartIndex * NUM_COLUMNS,
                    overscanStopIndex:
                      gridProps.overscanRowStopIndex * NUM_COLUMNS,
                    visibleStartIndex:
                      gridProps.visibleRowStartIndex * NUM_COLUMNS,
                    visibleStopIndex:
                      gridProps.visibleRowStopIndex * NUM_COLUMNS,
                  });
                }}
                ref={ref}
                itemData={itemStatusMap}
              >
                {Cell}
              </Grid>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
}
