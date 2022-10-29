import { styled } from "@mui/material";
import WhiteButton from "../components/Button";
import IMAGE from "../assets/IMAGE.png";
import illust from "../assets/illust.png";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";
import five from "../assets/5.svg";
import icons from "../assets/icons.png";
import ava from "../assets/ava.png";
import Stars from "../components/Stars";
import icon from "../assets/icon1 (1).svg";
import icon2 from "../assets/icon1 (2).svg";
import icon3 from "../assets/icon1 (3).svg";
import icon4 from "../assets/icon1 (4).svg";
import Numbers from "../components/Numbers";
import good from "../assets/goods (1).svg";
import good2 from "../assets/goods (2).svg";
import good3 from "../assets/goods (3).svg";
import card from "../assets/card (1).svg";
import card2 from "../assets/card (2).svg";
import card3 from "../assets/card (3).svg";
import Card from "../components/Card";

export default function View() {
  return (
    <div>
      <Blue>
        <Header className="wrap">
          <h3>web.folio</h3>
          <div>
            <p>Work</p>
            <p>About</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <h4>Cart (0) &equiv;</h4>
        </Header>
        <Intro className="wrap">
          <div>
            <h1>I design digital products that make an impact.</h1>
            <p>
              Hi! I’m Alex, a product designer based in Oakland. I create
              user-friendly interfaces for fast-growing startups.
            </p>
            <WhiteButton>Hire Me!</WhiteButton>
          </div>
          <img src={IMAGE} alt={IMAGE} />
        </Intro>
      </Blue>
      <White>
        <About className="wrap">
          <div className="left">
            <h4>
              <img src={illust} alt={illust} />
              about
            </h4>
            <section>
              <Stars color="BLUE" />
              <p>
                Working with Alex was interesting. He went above and beyond what
                I've asking for and provided such an amazing design for my
                mobile application.
              </p>
              <div className="comment">
                <img src={ava} alt={ava} />
                <div>
                  <p>Steve McQuillen</p>
                  <p>CEO @ Vencortex</p>
                </div>
              </div>
            </section>
          </div>
          <div className="right">
            <h1>Trusted by the fastest growing digital startups</h1>
            <div className="rating">
              <div>
                <h5>7+</h5>
                <p>Years of experience</p>
              </div>
              <div>
                <h5>50+</h5>
                <p>Projects completed</p>
              </div>
              <div>
                <h5>30+</h5>
                <p>Happy clients</p>
              </div>
            </div>
            <img src={icons} alt={icons} />
          </div>
        </About>
        <Work className="wrap">
          <h4>
            <img src={illust} alt={illust} />
            work
          </h4>
          <h1>Bringing stellar results for every client.</h1>
          <div>
            <section>
              <img src={one} alt={one} />
              <h3>Maize Website Design</h3>
              <p>
                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                laoreet. Nulla facilisi.
              </p>
            </section>
            <section>
              <img src={two} alt={two} />
              <h3>Datadash Product Design</h3>
              <p>
                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                laoreet. Nulla facilisi.
              </p>
            </section>
          </div>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img style={{ width: "50%" }} src={three} alt={three} />
            <h3>Joggr Website Design</h3>
            <p>
              Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
              laoreet. Nulla facilisi.
            </p>
          </section>
          <div>
            <section>
              <img src={five} alt={four} />
              <h3>Otsuka Pharmaceutical</h3>
              <p>
                Partnering with healthcare researchers to improve patient
                communications and experience.
              </p>
            </section>
            <section>
              <img src={one} alt={five} />
              <h3>Origin UI/UX Design</h3>
              <p>
                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                laoreet. Nulla facilisi.
              </p>
              <button>view all projects</button>
            </section>
          </div>
        </Work>
      </White>
      <Blue>
        <Services className="wrap">
          <div className="column">
            <section>
              <span>
                <img src={illust} alt={illust} />
                services
              </span>
              <h1>Pushing the boundaries of your potential</h1>
            </section>
            <div className="section">
              <img src={icon4} alt="icon" />
              <h4>Memorabilia</h4>
              <p>
                Choose from easy, affordable options for merch like custom tees
                and sets of pins.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="section">
              <img src={icon} alt="icon" />
              <h4>Branding</h4>
              <p>
                Refresh your logo, revamp your website, and even your
                letterhead— develop a cohesive aesthetic for your brand.
              </p>
            </div>
            <div className="section">
              <img src={icon3} alt="icon" />
              <h4>Visual Aids</h4>
              <p>
                Make your point more convincingly with branded flyers, slides,
                catalogues, infographics.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="section">
              <img src={icon2} alt="icon" />
              <h4>Packaging</h4>
              <p>
                Rethink labels, boxes, signage, and everything that'll help your
                product make a great first impression.
              </p>
            </div>
            <div className="withbutton">
              <WhiteButton>Start a project</WhiteButton>
              <div>
                <img src={illust} alt="icom" />
                <img src={illust} alt="icom" />
                <img src={illust} alt="icom" />
              </div>
              <div>
                <img src={illust} alt="icom" />
                <img src={illust} alt="icom" />
              </div>
            </div>
          </div>
        </Services>
      </Blue>
      <Sky>
        <Process className="wrap">
          <span>
            <img src={illust} alt="icon" />
            Process
          </span>
          <div className="head">
            <h1>
              Getting started <br /> is easy.
            </h1>
            <p>
              I've developed a structure that saves time (and money) while
              making the most of our interactions.
            </p>
          </div>
          <div className="numbers">
            <Numbers
              num="1"
              title="Listen"
              text="I get to know you and your company, your goals and expectations."
            />
            <Numbers
              num="2"
              title="Ideate"
              text="I create a couple of pitches based on the project brief and goals."
            />
            <Numbers
              num="3"
              title="Execute"
              text="I work on the approved plan while keeping you in the loop until we have a finished project."
            />
          </div>
        </Process>
      </Sky>
      <White>
        <Shop className="wrap">
          <p>
            <img src={illust} alt={illust} />
            shop
            <img src={illust} alt={illust} />
          </p>
          <h1>In a rush?</h1>
          <h1>Shop ready designs here.</h1>
          <div className="goods">
            <div>
              <img src={good2} alt={good} />
              <h4>Ergonomic Frozen Pants</h4>
              <span>In et consequ</span>
            </div>
            <div>
              <img src={good3} alt={good} />
              <h4>Ergonomic Frozen Pants</h4>
              <span>In et consequ</span>
            </div>
            <div>
              <img src={good} alt={good} />
              <h4>Ergonomic Frozen Pants</h4>
              <span>In et consequ</span>
            </div>
          </div>
          <p>View all products &rarr;</p>
        </Shop>
        <Blog className="wrap">
          <span>
            <img src={illust} alt="icpn" />
            blog
          </span>
          <div className="head">
            <h1>
              Words On Design, Tech <br /> & Other Things I Love
            </h1>
            <WhiteButton>Explore all posts&rarr;</WhiteButton>
          </div>
          {data.map((el) => (
            <Card
              date={el.date}
              title={el.title}
              text={el.text}
              img={el.img}
              key={el.title}
            />
          ))}
        </Blog>
      </White>
      <Blue>
        <Contact className="wrap">
          <span>
            <img src={illust} alt="wroer" />
            contact
          </span>
          <p>{slide}</p>
          <footer>
            <p>alexsmith@example.com</p>
            <div>
              <p>Work</p>
              <p>About</p>
              <p>Shop</p>
              <p>Contact</p>
              <p>Blog</p>
            </div>
            <div>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Behance</p>
              <p>GitHub</p>
              <p>Dribbble</p>
            </div>
            <div>
              <p>Subscribe to my weekly newsletter</p>
              <input type="text" />
              <button>Subscribe!</button>
            </div>
          </footer>
          <section>
            <p>© Template by Sumit Hegde - Powered by Webflow</p>
            <p>Style Guide / Style Guide / Style Guide / Style Guide</p>
          </section>
        </Contact>
      </Blue>
    </div>
  );
}
const Contact = styled("div")`
  padding-top: 90px;
  padding-bottom: 1px;
  section {
    display: flex;
    justify-content: space-between;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    margin: 50px 0px;
    p {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 28px;
      margin: 20px 0px;
      color: #ffffff;
      cursor: pointer;
      :hover {
        color: #e1e0e0;
      }
    }
  }
  footer {
    display: flex;
    justify-content: space-between;

    button {
      width: 140px;
      height: 48px;
      background: #4543e8;
      border-radius: 24px;
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 28px;
      color: #ffffff;
      cursor: pointer;
      :hover {
        color: #e1e0e0;
        background-color: #3937b1;
      }
    }
    input {
      width: 290px;
      height: 48px;
      background-color: #e6dfdf20;
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 240px;
    }
    p {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 28px;
      margin: 20px 0px;
      color: #ffffff;
      cursor: pointer;
      :hover {
        color: #e1e0e0;
      }
    }
  }

  p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 66px;
    /* identical to box height, or 110% */
    margin: 60px 0px;
    color: #ffffff;
  }
  span {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;

    color: #ffffff;
  }
`;
const data = [
  {
    date: "Design • 6 Oct, 2021",
    title: "On our obsession with circles",
    text: "Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.",
    img: card,
  },
  {
    date: "Design • 6 Oct, 2021",
    title: "From bullet points to Yayoi Kusama— On our obsession with circles",
    text: "Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.",
    img: card2,
  },
  {
    date: "Technology • 6 Oct, 2021",
    title: "It's a jungle out there for gig workers",
    text: "Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.",
    img: card3,
  },
];
const slide = "Let's connect.  Have something in mind? ";
const Blog = styled("div")`
  padding: 90px 0px;
  .card {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px #f1f2f6 solid;
    padding: 40px 0px;
    section {
      display: flex;
      div {
        margin: 0px 30px;
      }
    }
    div {
      width: 38%;
    }
    p {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 28px;
      color: #000000;
    }
    h1 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #000000;
      margin: 20px 0px;
    }
    h2 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #4543e8;
    }
  }
  .head {
    display: flex;
    justify-content: space-between;
    margin: 50px 0px;
    h1 {
      font-family: "Space Grotesk";
      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 64px;
      /* or 114% */

      letter-spacing: 1.2px;

      color: #000000;
    }
  }
  span {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #4543e8;
  }
`;
const Shop = styled("div")`
  .goods {
    display: flex;
    margin-top: 90px;
    justify-content: space-between;
    h4 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      /* identical to box height, or 124% */
      padding: 20px 0px;
      color: #010032;
    }
    span {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      /* identical to box height, or 155% */

      color: #010032;
    }
  }
  h1 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 53px;
    /* identical to box height, or 110% */

    text-align: center;

    color: #000000;
  }
  p {
    text-align: center;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 30px 0px;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: #4543e8;
    img {
      margin: 0px 10px;
    }
  }
`;
const Process = styled("div")`
  padding: 100px 0px;
  .numbers {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
  }
  .num {
    width: 370px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0px;
      span {
        font-size: 22px;
      }
    }
    h4 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      /* identical to box height, or 124% */

      color: #000000;
    }
    p {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 28px;
      /* or 232% */

      color: #000000;
    }
    h1 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 54px;
      /* identical to box height, or 112% */

      color: #4543e8;
    }
  }
  h1 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 66px;
    /* or 110% */

    text-align: left;

    color: #000000;
  }
  span {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #4543e8;
  }
  .head {
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;
    p {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 34px;
      /* or 155% */
      height: 103px;
      width: 406px;

      color: #000000;
    }
  }
`;
const Services = styled("div")`
  display: flex;
  padding: 100px 0px;
  justify-content: space-between;
  button {
    width: 272px;
    height: 69px;
    left: calc(50% - 272px / 2 + 467px);
    top: 385px;
    margin: 30px 0px;
    background: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 32px;
  }
  .section {
    text-align: left;
    height: 35%;
    h4 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #ffffff;
    }
    p {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #ffffff;
    }
  }
  .column {
    width: 27%;
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .withbutton {
      text-align: right;
      /* display: flex; */
      /* flex-direction: column; */
      /* justify-content: space-around; */
      img {
        width: max-content;
        margin: 10px 0px;
      }
      div {
        text-align: right;
      }
    }
    span {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #ffffff;
      img {
        margin: 0px 10px;
      }
    }
    h1 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 54px;
      color: #ffffff;
      margin: 30px 0px;
    }
  }
`;
const Work = styled("div")`
  margin-bottom: 50px;
  button {
    height: 160px;
    width: 160px;
    background-color: #4543e8;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    border: none;
    margin: 50px 0px;
    cursor: pointer;
    :hover {
      background-color: #312f99;
    }
  }
  section {
    text-align: left;
    margin: 30px 0px;
  }
  & h3 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    margin: 30px 0px;
    color: #000000;
  }
  & p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    /* or 232% */

    color: #000000;
  }
  & div {
    display: flex;
    justify-content: space-between;
  }
  & h1 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 66px;
    color: #000000;
    width: 60%;
    margin: 30px 0px;
  }
  & h4 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #4543e8;
  }
`;
const About = styled("div")`
  display: flex;
  height: 398px;
  margin-top: 150px;
  margin-bottom: 150px;
  justify-content: space-between;
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 30px;
    width: min-content;
  }
  .left {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
  }
  & section {
    .comment {
      display: flex;
      width: 232px;
      justify-content: space-between;
      margin: 30px 0px;
    }
  }
  .rating {
    display: flex;
    & div {
      margin-right: 60px;
    }
  }
  & div {
    & h5 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 66px;
      color: #4543e8;
    }
    & p {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 28px;
      /* or 147% */

      color: #000000;
    }

    & h4 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #4543e8;
    }
    & h1 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 54px;
      /* or 112% */

      color: #000000;
    }
  }
`;
const Intro = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    height: 770px;
    width: auto;
    z-index: 99;
  }
  & div {
    width: 50%;
  }
  & p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
    margin: 30px 0px;
    color: #ffffff;
  }
  & h1 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 76px;
    color: #ffffff;
  }
`;
const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  & div {
    display: flex;
    justify-content: space-around;
    width: 30%;
    & p {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      /* identical to box height, or 128% */
      color: #ffffff;
    }
  }
  & h4 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height, or 120% */

    color: #ffffff;
  }
  & h3 {
    color: white;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    margin: 0;
    line-height: 19px;
  }
`;
const Blue = styled("div")`
  background-color: #010032;
`;
const White = styled("div")`
  background-color: white;
`;
const Sky = styled("div")`
  background-color: #d8d8eb;
`;
