import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Roses are red, violets are blue, and I'm planning a hot, hot summer.
          </p>
          <p>
            It's the summer of expressing fiery love and you're all invited. I'm not afraid of love-not afraid to feel it, express it, and say it out loud. And I want to be the world's biggest advocate. Love will drive you crazy. Love will make you dye your hair pink. Love will make you move to another country. Love will make you learn a new hobby. Love will make you leave a party early or make you stay until 6am and not want to leave. Love will make you cry.
          </p>
        </div>
      </section>
    </main>
  );
}
