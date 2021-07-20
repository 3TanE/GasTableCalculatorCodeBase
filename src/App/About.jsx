import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => (
  <div className="About">
    <div className="title">
      About
    </div>
    <div className="aboutText">
      This is a gas table calculator for two atomic gases.
      It was created to be able to easily get the values
      <div />
      out of the gas table that you need and non other.
      <div />
      Especially when using the available tables as pdf it
      involves much scrolling and it is hard to use a ruler to not switch the lines.
      <div />
      Although it has it's limitations since some functions are not simply reversible.
      In later versions a numerical approach might be implemented to solve this issue.
      <div />
      Feel free to
      {' '}
      <a href="https://github.com/3TanE/GasTableCalculatorCodeBase">visit the Repository</a>
      {' '}
      and leave a comment and/or suggestions.
      <div className="spacer" />
      <div className="thanksTitle">
        Special thanks go to
      </div>
      <div className="spacer" />
      <div className="specialThanks"> TheClocktwister who provided the webpack template for this App.</div>
      <div className="specialThanks">
        Herny Page of Fh-Aachen who motivated me to make this App
        <div />
        by providing outstanding documentation
        for the practical assignments during the stay at home order through out the pandemic
      </div>
      <div className="specialThanks">
        NASA for making this great background image
        <a href="https://www.nasa.gov/centers/armstrong/multimedia/imagegallery/Schlieren/f4_p4_plane_drop_v.html">publicly available.</a>
      </div>
      <NavLink to="/">Back to Calculator</NavLink>
    </div>
  </div>

);

export default About;
