/**
 * About Section
 * @author kedari.mahesh@gmail.com
 */
export default function About() {
  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Pune</h2>
        <p className="about-subtext">
          Little Lemon opened in 2013 by two Indian brothers, Mahesh and Yogesh.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>

      <section className="double-image">
        <img
          className="about-1"
          src={require("../../assets/food/food3.jpeg")}
          alt="Little Lemon restaurant cuisine 1"
        ></img>
        <img
          className="about-2"
          src={require("../../assets/food/food2.jpeg")}
          alt="Little Lemon restaurant cuisine 2"
        ></img>
      </section>
    </article>
  );
}
