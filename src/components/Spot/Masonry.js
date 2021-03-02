import React from "react";

const Masonry = ({ scenicSpot }) => {
  const noCacheList = scenicSpot.map((item, index) => ({
    title: index + ". " + item.title,
    image: item.image + (item.image ? "?noCache=" + Math.random() : ""),
  }));

  const keyMapper = (item, index) => item.image || index;

  const columnWidth = 200;
  const defaultHeight = 250;
  const defaultWidth = columnWidth;

  // Default sizes help Masonry decide how many images to batch-measure
  const cache = new CellMeasurerCache({
    defaultHeight,
    defaultWidth,
    fixedWidth: true,
  });

  // Our masonry layout will use 3 columns with a 10px gutter between
  const cellPositionerConfig = {
    cellMeasurerCache: cache,
    columnCount: 3,
    columnWidth,
    spacer: 10,
  };

  const cellPositioner = createMasonryCellPositioner(cellPositionerConfig);

  const MasonryComponent = ({ itemsWithSizes, setRef }) => {
    const cellRenderer = ({ index, key, parent, style }) => {
      const { item, size } = itemsWithSizes[index];
      const height = columnWidth * (size.height / size.width) || defaultHeight;

      return (
        <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
          <div style={style}>
            <div>{item.title}</div>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  height: height,
                  width: columnWidth,
                  display: "block",
                }}
              />
            )}
          </div>
        </CellMeasurer>
      );
    };

    return (
      <Masonry
        cellCount={itemsWithSizes.length}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={cellRenderer}
        height={600}
        width={800}
        keyMapper={keyMapper}
        ref={setRef}
      />
    );
  };
};

export default Masonry;
