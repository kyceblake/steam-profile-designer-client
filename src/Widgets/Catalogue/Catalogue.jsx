import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

let itemStatusMap = {};
const NUM_COLUMNS = 4;

const isItemLoaded = (index) => !!itemStatusMap[index];
const loadMoreItems = (startIndex, stopIndex) => {
  for (let index = startIndex; index <= stopIndex; index++) {
    itemStatusMap[index] = 0;
  }
  return new Promise((resolve) =>
    setTimeout(() => {
      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = 1;
      }
      resolve();
    }, 2500)
  );
};

function Cell({ columnIndex, rowIndex, style }) {
  let label;
  console.log(` ${rowIndex} ${columnIndex} `);
  const itemIndex = rowIndex * NUM_COLUMNS + columnIndex;
  if (itemStatusMap[itemIndex] === 1) {
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

export default function Catalogue({}) {
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
