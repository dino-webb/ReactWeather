var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About!</h1>
      <p>This is a weather application built on React. I have built this for knowledge!</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="HTTP://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
