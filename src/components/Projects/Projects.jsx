import p1 from "../../assets/images/BudgetBee.png";
import p2 from "../../assets/images/Product-Managment-System-Demo.png";
import p3 from "../../assets/images/Fake-Api-Post.png";
import './Projects.scss';

const Card = ({ img, title, text, reversed, link }) => (
  <div className={`project-card${reversed ? " reversed" : ""}`}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} />
    </a>
    <div className="project-info">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>View Project</button>
      </a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects">
      <div className="text-center">
        <h2 className="section-title">Projects</h2>
        <div className="section-underline"></div>
      </div>

      <Card
        img={p1}
        title="Personal Finance Tracker"
        text="A responsive web app built to help users track expenses and visualize spending habits.
        Designed and prototyped in Figma, then developed using modern front-end tools."
        link="https://personal-finance-tracker-1-project.netlify.app"
      />
      <Card
        img={p2}
        title="Product Management System"
        text="A full-featured CRUD web app for managing products efficiently.
        Built with modern front-end technologies to handle product creation,
        updates, and data visualization in a clean interface."
        reversed
        link="https://product-management-system-00051.netlify.app"
      />
      <Card
        img={p3}
        title="Fake Post API"
        text="A React-based interface that consumes a mock REST API to fetch, display and interact with posts.
        Built to demonstrate asynchronous data-handling, list rendering and state management in a frontend app."
        link="https://react-fake-postapi-050000.netlify.app"
      />
    </section>
  );
}


