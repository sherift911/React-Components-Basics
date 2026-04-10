import TagButton from "./TagButton";

export default function SideMenu() {
  return (
    <div
      style={{
        padding: "10px 20px",
        border: "5px solid teal",
        display: "flex",
        justifyContent: "center",

        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
    </div>
  );
}
