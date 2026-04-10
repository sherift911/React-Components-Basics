export default function Post() {
  return (
    <div
      style={{
        border: "5px solid teal",
        marginBottom: "15px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textTransform: "capitalize",
          padding: "20px",
          borderBottom: "1px solid #777",
          fontWeigth: "bold",
        }}
      >
        this is post title
      </h1>
      <p style={{ textTransform: "capitalize" }}>this is the post body</p>
    </div>
  );
}
