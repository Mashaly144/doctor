import "./MyUiDontTouch.css";
export default function SectionHeader({ content, head, center }) {
  return (
    <div className={center ? "section__header text-center" : "section__header"}>
      <h1>{head}</h1>
      <p>{content}</p>
    </div>
  );
}
