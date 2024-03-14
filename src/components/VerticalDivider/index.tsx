import styles from "./verticalDivider.module.scss";

const VerticalDivider = ({
  height = "100%",
  opacity = 1,
}: {
  height?: string;
  opacity?: number;
}) => (
  <div
    className={styles.divider}
    style={{
      height: height,
      opacity: opacity,
    }}
  />
);

export default VerticalDivider;
