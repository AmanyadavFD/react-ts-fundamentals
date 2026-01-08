import type { FC, ReactNode } from "react";
type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
  severity?: "low" | "medium" | "high";
};
const InfoBox: FC<InfoBoxProps> = ({ mode, children, severity }) => {
  if (mode === "hint") {
    return (
      <>
        <aside className="infobox infobox-hint">
          <p>{children}</p>
        </aside>
      </>
    );
  }
  return (
    <>
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h3>Warning</h3>
        {children}
      </aside>
    </>
  );
};
export default InfoBox;
