import React from "react";

const About = () => {
  return (
    <div>
      <h1 id="starwars">star-wars</h1>

      <p>Created with CodeSandbox</p>

      <h1 id="welcometostarwarsapplication">
        Welcome to Starwars Application!
      </h1>

      <p>
        Hi! <strong>Starwars</strong> fans. This is a Simple Starwars Web
        Application written in ReactJS.
      </p>

      <h1 id="functionalities">Functionalities</h1>

      <p>Starwars application has following functionalities in it :</p>

      <ul>
        <li>
          A <strong>Logo</strong> on top which redirects to Starwars website.
        </li>

        <li>
          An Independent <strong>Header</strong> component to show the Navbar
          and links to go to Search or About pages.
        </li>

        <li>
          Routing is done with <strong>React-Router</strong>.
        </li>

        <li>
          It has an Independent <strong>Search</strong> component to search for
          characters.
        </li>

        <li>
          A <strong>Button with Spinner</strong> functionality in it to show the
          processing status.
        </li>

        <li>
          On <strong>successful search</strong>, it shows up to 5 characters and
          the total Count of Characters.
        </li>

        <li>
          An <strong>Error</strong> component is included to handle the error
          massaged in case of any error being thrown from Backend.
        </li>

        <li>
          Count, Characters' details are in separate component along with Film
          component which is embedded inside the characters' detail component.
        </li>

        <li>
          Data is fetched with <strong>Axios</strong> library.
        </li>

        <li>
          <strong>Lodash</strong> library is used to convert objects into an
          array.
        </li>

        <li>
          The UI is made with responsiveness. <strong>Flexbox</strong> is used
          for the purpose.
        </li>

        <li>About Page contains the same Information.</li>

        <li>
          At the end of the page <strong>Footer</strong> is included as an
          independent component to have all the social information about me(Plz
          feel free to contact me any time).
        </li>

        <li>
          UI is given a simple theme of Starwars which is{" "}
          <strong>Black and Orange</strong>.
        </li>
      </ul>

      <h1 id="notes">Notes:</h1>

      <ul>
        <li>You may face a problem sometimes with a logo.</li>
      </ul>

      <h1 id="howtoruntheapplication">How to run the application:</h1>

      <ul>
        <li>Click on the Link mentioned above.</li>

        <li>It will open the Code Repository.</li>

        <li>
          Click on Open in New Window to have the best experience mentioned
          below.
        </li>
      </ul>

      <p>
        <a href="https://github.com/Abhishekkuri/star-wars/blob/master/public/Images/Click%20This.png">
          Click This for Screenshot
        </a>
      </p>
    </div>
  );
};

export default About;
