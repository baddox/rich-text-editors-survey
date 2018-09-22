import { compose, withProps, withState } from 'recompose';

const withHover = compose(
  withState('hovered', 'setHovered', false),
  withProps(({ setHovered }) => {
    return {
      hoverProps: {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
      },
    };
  })
);

export default withHover;
